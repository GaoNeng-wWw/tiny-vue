#!bin/bash

set -ex

pr_number=${1}
trigger_prefix=${2}
trigger_command=${3}
components=(${4})


if [[ ! -z ${NODE_AUTH_TOKEN} ]] ; then
  echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> ~/.npmrc
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
  echo "always-auth=true" >> ~/.npmrc
  npm whoami
fi

if [[ -z $trigger_prefix ]]; then
    echo "你是否忘记添加了/trigger前缀?"
    exit 0
fi

if [[ -z $trigger_command ]]; then
    echo "你是否忘记添加了 /trigger release-edge ?"
    exit 0
fi

if [[ $trigger_command != "release-edge" ]]; then
    echo "触发器指令无效. 应当为 release-edge 但却是 $trigger_command. "
    exit 0
fi

if [[ -z "${components[@]}" ]]; then
    echo "不发布任何组件"
    exit 0
fi

for p in $components;
do
    echo "正在构建 $p pr-$pr_number"
    pnpm build:ui $p
    echo "$p pr-$pr_number 构建成功"
done

echo "正在构建 sass-common pr-$pr_number"
pnpm build:ui saas-common -t pr-${pr_number} -d sass
echo "正在构建 theme pr-$pr_number"
pnpm build:theme
echo "正在构建 renderless pr-$pr_number"
pnpm build:renderless
echo "正在构建 themeSass pr-$pr_number"
pnpm build:themeSass
echo "正在构建 themeMobile pr-$pr_number"
pnpm build:themeMobile

pnpm pub:all
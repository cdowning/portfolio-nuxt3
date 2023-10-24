import SvgSprite from '@/assets/sprite/gen/sprite.svg';

import { filename } from 'pathe/utils';

interface fileNameObject {
    default: string;
}

const icons = import.meta.glob('~/assets/icons/svg/*.svg', {
    eager: true,
}) as any;

const iconPath = Object.keys(icons);

const iconList: any = [];

iconPath.forEach((icon: any) => {
    const svg = icon.replace('/assets/icons/svg/', '').replace('.svg', '');
    iconList.push(svg);
});

export default iconList;

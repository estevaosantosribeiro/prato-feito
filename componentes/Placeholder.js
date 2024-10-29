import { View } from 'react-native';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'

export default function Placeholder() {
    return (
        <ContentLoader viewBox={`0 27 360 800`} backgroundColor='#bbb' foregroundColor='#ddd'>
            <Rect x='32' y='5' rx='4' ry='4' width={110} height={12} />
            <Rect x='30' y='42' rx='12' ry='12' width={100} height={90} />
            <Rect x='32' y='137' rx='4' ry='4' width={90} height={10} />
            <Rect x='32' y='152' rx='4' ry='4' width={50} height={10} />
            <Rect x='140' y='42' rx='12' ry='12' width={100} height={90} />
            <Rect x='140' y='137' rx='4' ry='4' width={90} height={10} />
            <Rect x='140' y='152' rx='4' ry='4' width={50} height={10} />
            <Rect x='250' y='42' rx='12' ry='12' width={100} height={90} />
            <Rect x='250' y='137' rx='4' ry='4' width={90} height={10} />
            <Rect x='250' y='152' rx='4' ry='4' width={50} height={10} />
            <Rect x='32' y='180' rx='4' ry='4' width={110} height={12} />
            <Circle cx='55' cy='230' r='24' />
            <Rect x='35' y='260' rx='3' ry='3' width={40} height={10} />
            <Circle cx='120' cy='230' r='24' />
            <Rect x='100' y='260' rx='3' ry='3' width={40} height={10} />
            <Circle cx='185' cy='230' r='24' />
            <Rect x='165' y='260' rx='3' ry='3' width={40} height={10} />
            <Circle cx='250' cy='230' r='24' />
            <Rect x='230' y='260' rx='3' ry='3' width={40} height={10} />
            <Circle cx='315' cy='230' r='24' />
            <Rect x='295' y='260' rx='3' ry='3' width={40} height={10} />
            <Circle cx='380' cy='230' r='24' />
        </ContentLoader>
    );
}
#!/usr/bin/env bash

set -euxo pipefail

TMPDIR=$HOME/volatile/

for f in `ls -1 dist/volume/*/*.mp4`
do
    echo $f
    dir=$TMPDIR/$f.d/
    [[ ! -f $dir/keyframes.list || ! -f $dir/poses.json ]] &&
        mkdir -p $dir &&
        ffmpeg -skip_frame nokey -i $f -vsync 0 -r 30 -f image2 $dir/keyframe-%05d.jpeg &&
        ffprobe -v quiet -select_streams v -skip_frame nokey -show_frames -show_entries frame=pkt_pts_time $f > $dir/keyframes.list
    
    [ ! -f $dir/poses.json ] &&
        $(npm bin)/ts-node ./posenet-node.ts $dir > $dir/poses.json &&
        rm $dir/*.jpeg
done

$(npm bin)/ts-node ./stitch.ts 'dist/volume/*/*.mp4' 'dist/' $TMPDIR > dist/volume/indexed.json

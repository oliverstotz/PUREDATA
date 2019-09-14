every shader is located in a seperate folder, consisting of:

[shadername].vert
[shadername].frag
[shadername].pd (this will be the GUI)
[shadername].txt (infos) 

the [shadername].txt file contains the following infos:
1.) RECTANGLE (the texture mode for Gem - almost always 1)
2.) SCALETOG (sort of allows "integer" params instead of float)
3.) PARAMS (these are the parameter names AND their default value)
4.) PRESETS (7 presets in [PARAM] [VALUE] pairs)

====================== IMPORTANT ! ========================
all .vert and .frag files must have unix line ending ! (LF)
otherwise the loading does not work!
===========================================================




original files were downloaded from:

https://github.com/b01xy/glsl

chromakey, lumakey, gaussianblur, edgeDetection:
https://github.com/Blackhart/GLSL-Shaders/tree/master/glsl

v001, blackandwhite:
http://001.vade.info/?page_id=20

fractal, twirl, deforme_texture:
https://github.com/thomasfredericks/Tvestroy




also nice:

https://www.youtube.com/watch?v=9_9XZoerIuU



maybe in the future but is GLSL ES:

https://www.shadertoy.com/
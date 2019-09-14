// Cyrille Henry 2007
// default value doesn't seem to work


#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex;
//uniform sampler2D MyTex;
uniform float B;
uniform float C;

void main (void)
{
 vec4 color = texture2DRect(MyTex,  (gl_TextureMatrix[0] * gl_TexCoord[0]).st);
 
color *= C; // contrast
color = color + B; // brightness
 gl_FragColor = color;
}

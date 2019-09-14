// blend amount;
uniform vec4 color;
uniform float tol;
uniform float fade;
uniform float invert;
uniform float mode;
uniform float binary;

// samplers;
uniform sampler2DRect tex0;
uniform sampler2DRect tex1;

// texcoords;
varying vec2 texcoord0;
varying vec2 texcoord1;

// entry point;
void main()
{   
	vec4 one_third = vec4(0.333333);

	vec4 a = texture2DRect(tex0, texcoord0);
	vec4 b = texture2DRect(tex1, texcoord1);
	vec4 source = a;
	vec4 target = color;

	// zero our alphas
	source.a = 0.;
	target.a = 0.;	

	// measure distance from target
	vec4 vdelta = abs(source-target);
	
	// sum vector distance, scaling by a third
	float delta = dot(vdelta,one_third); 
	
	// determine scaling coefficient witin our fade range
	float scale = smoothstep(abs(tol),abs(tol)+abs(fade),delta);

	// invert if necessary
	float mixamount = mix(scale,1.-scale,invert);

	// blend between sources based on mixamount	
	vec4 result = mix(b,a,vec4(mixamount));

	// if not binary just set alpha value
	a.a = mixamount;	
	result = mix(a,result,vec4(binary));
	
	// result either blend or mask based on mode
	gl_FragColor = mix(result,vec4(mixamount),vec4(mode));
	
	// setting the fragment color is a useful means of debugging
	// vdelta.a = 1.;
	//gl_FragColor = vec4(vdelta);
}
//list: param name, default value, display name;
//defaults binary 1 binary

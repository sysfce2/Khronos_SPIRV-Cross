#version 450

layout(set = 0, binding = 0) uniform sampler2D uSampler[4];
layout(set = 0, binding = 1) uniform sampler2D uSamp;
layout(location = 0) in vec2 vUV;

layout(location = 0) out vec4 FragColor;

vec4 sample_in_func()
{
	return texture(uSampler[2], vUV);
}

void main()
{
	FragColor = sample_in_func();
}

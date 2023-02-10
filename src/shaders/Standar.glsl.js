export const vertex = `

  attribute vec4 a_Position
  attribute vec4 a_Color;
  attribute vec4 a_Normal;

  uniform mat4 u_MvpMatrix;
  uniform mat4 u_NormalMatrix;
  uniform vec3 u_LightColor;
  uniform vec3 u_LightDirection;
  uniform vec3 u_AmbientLight;

  varying vec4 v_Color;

  void main() {
    gl_Position = u_MvpMatrix * a_Position;

    vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));

    float nDotL = max(dot(u_LightDirection, normal), 0.0);

    vec3 diffuse = u_LightColor * a_Color.rgb * nDotL;

    vec3 ambient = u_AmbientLight * a_Color.rgb;

    v_Color = vec4(diffuse + ambient, a_Color.a);
  };

`
export const fragment = `
  varying vec4 v_Color;

  void main() {
    gl_FragColor = v_Color;
  }

  `

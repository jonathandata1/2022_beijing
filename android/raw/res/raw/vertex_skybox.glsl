uniform mat4 u_Matrix;
attribute vec3 a_Position;
varying vec3 v_Position;

void main()                    
{                                	  	          
    v_Position = a_Position;	
    // Make sure to convert from the right-handed coordinate system of the
    // world to the left-handed coordinate system of the cube map, otherwise,
    // our cube map will still work but everything will be flipped.
    v_Position.z = -v_Position.z;

    gl_Position = u_Matrix * vec4(a_Position, 1.0);
//    gl_Position = gl_Position.xyww;
}    

class Tree
{
 constructor()
	 {
		 this.buffer=gl.createBuffer();
		 gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		 //this.addPoints = 0;
		 
		 //Now we want to add color to our vertices information.
		 this.vertices =
		// x  y	 z		r  g  b
		 [	

		 //front size
		0.5,0,0,		.4,.2,0,
		0,0.5,0,		.4,.2,0,
		0,0,0,			.4,.2,0,
		 
		 0.5,0,0,		.4,.2,0,
		 0,0.5,0,		.4,.2,0,
		 0.5,.5,0,		.4,.2,0,
		 
		
		 //left wall
		 .5,0,0,		.4,.2,0,
		 .5,.5,.5,		.4,.2,0,
		 0.5,0.5,0,		.4,.2,0,
		 
		 .5,0,0,		.4,.2,0,
		 0.5,0.5,0.5,	.4,.2,0,
		 0.5,0,0.5,		.4,.2,0,
		 
		 //Right wall
		 0,0,0,			.4,.2,0,
		 0,0,0.5,		.4,.2,0,
		 0,0.5,0.5,		.4,.2,0,
		 
		 0,0.5,0,		.4,.2,0,
		 0,0,0,			.4,.2,0,
		 0,0.5,0.5,		.4,.2,0,
		 
		 //Back Wall
		 0,0,0.5,		.4,.2,0,
		 0.5,0.5,0.5,	.4,.2,0,
		 0,0.5,0.5,		.4,.2,0,
		 
		 0.5,0,0.5,		.4,.2,0,
		 0.5,0.5,0.5,	.4,.2,0,
		 0,0,0.5,		.4,.2,0,
		 
		 //Front Leaf Node
	
		 .2,.4,.2,		0,1,0.7,
		 .4,.4,.2,		0,1,0.7,
		 0,.6,0,		0,1,0.7,
		
				
		 .4,.4,.2,		0,1,0.7,
		 .5,.6,0,		0,1,0.7,
		 0,.6,.0,		0,1,0.7,
		 
		 0,.6,0,		0,1,0.7,
		 0,.7,-.1,		0,1,0.7,
		 .5,.6,0,		0,1,0.7,
		 
		  .5,.6,0,		0,1,0.7,
		 .5,.7,-.1,		0,1,0.7,
		 0,0.7,-.1,		0,1,0.7,
		 
		 .0,.8,0,		0,1,0.7,
		 .5,.7,-.1,		0,1,0.7,
		 0,0.7,-.1,		0,1,0.7,
		 
		 .0,.8,0,		0,1,0.7,
		 .5,.8,0,		0,1,0.7,
		 .5,0.7,-.1,	0,1,0.7,
		 
		 .0,.8,0,		0,1,0.7,
		 .5,.8,0,		0,1,0.7,
		 .2,0.9,.2,		0,1,0.7,
		 
		  .5,.8,0,		0,1,0.7,
		 .4,.9,0.2,		0,1,0.7,
		 .2,0.9,.2,		0,1,0.7,
		
		//Back front
		
		.2,.4,.4,		0,1,0.7,
		 .4,.4,.4,		0,1,0.7,
		 0,.6,.5,		0,1,0.7,
		 
		 .4,.4,.4,		0,1,0.7,
		 .5,.6,.5,		0,1,0.7,
		 0,.6,.5,		0,1,0.7,
		
		0,.6,.5,		0,1,0.7,
		 0,.7,.6,		0,1,0.7,
		 .5,.6,.5,		0,1,0.7,
		 
		  .5,.6,.5,		0,1,0.7,
		 .5,.7,.6,		0,1,0.7,
		 0,0.7,.6,		0,1,0.7,
		 
		 .0,.8,.5,		0,1,0.7,
		 .5,.7,.6,		0,1,0.7,
		 0,0.7,.6,		0,1,0.7,
		 
		 .0,.8,.5,		0,1,0.7,
		 .5,.8,.5,		0,1,0.7,
		 .5,0.7,.6,		0,1,0.7,
		
		 .0,.8,.5,		0,1,0.7,
		 .5,.8,.5,		0,1,0.7,
		 .2,0.9,.4,		0,1,0.7,
		 
		  .5,.8,.5,		0,1,0.7,
		 .4,.9,0.4,		0,1,0.7,
		 .2,0.9,.4,		0,1,0.7,
		
		//right side
		
		.45,.4,.25,		0,1,0.7,
		 .45,.4,.35,		0,1,0.7,
		 0.5,.6,.35,		0,1,0.7,
		 
		 .5,.6,.25,		0,1,0.7,
		 .45,.4,.25,		0,1,0.7,
		 0.5,.6,.35,		0,1,0.7,
		 
		  .5,.6,.25,		0,1,0.7,
		 .6,.7,.25,			0,1,0.7,
		 0.5,.6,.35,		0,1,0.7,
		 
		 .6,.7,.35,			0,1,0.7,
		 .6,.7,.25,			0,1,0.7,
		 0.5,.6,.35,		0,1,0.7,
		 
		 .6,.7,.35,			0,1,0.7,
		 .6,.7,.25,			0,1,0.7,
		 .5,.8,.35,		0,1,0.7,
		 
		 .6,.7,.25,			0,1,0.7,
		 .5,.8,.25,			0,1,0.7,
		 .5,.8,.35,			0,1,0.7,
		
		 .4,.9,.25,			0,1,0.7,
		 .5,.8,.25,			0,1,0.7,
		 .5,.8,.35,			0,1,0.7,
		 
		 .4,.9,.25,			0,1,0.7,
		 .5,.8,.35,			0,1,0.7,
		 .4,.9,.35,			0,1,0.7,
		 
		 //Left side
		.15,.4,.25,		0,1,0.7,
		 .15,.4,.35,		0,1,0.7,
		 0,.6,.35,		0,1,0.7,
		 
		 0,.6,.25,		0,1,0.7,
		 .15,.4,.25,	0,1,0.7,
		 0,.6,.35,		0,1,0.7,
		 
		 0,.6,.25,		0,1,0.7,
		 -.1,.7,.25,	0,1,0.7,
		 0,.6,.35,		0,1,0.7,
		 
		 -.1,.7,.35,	0,1,0.7,
		 -.1,.7,.25,	0,1,0.7,
		 0,.6,.35,		0,1,0.7,
		
		 -.1,.7,.35,	0,1,0.7,
		 -.1,.7,.25,	0,1,0.7,
		 0,.8,.35,		0,1,0.7,
		 
		 -.1,.7,.25,	0,1,0.7,
		 0,.8,.25,		0,1,0.7,
		 0,.8,.35,		0,1,0.7,
		 
		 .15,.9,.25,	0,1,0.7,
		 0,.8,.25,		0,1,0.7,
		 0,.8,.35,		0,1,0.7,
		 
		 .15,.9,.25,	0,1,0.7,
		 0,.8,.35,		0,1,0.7,
		 .15,.9,.35,	0,1,0.7,
		 
		 //Right Front joint
		 .4,.4,.2,		0,1,0.7,
		 .45,.4,.25,	0,1,0.7,
		 0.5,.6,.25,	0,1,0.7,
		 
		 .4,.4,.2,		0,1,0.7,
		 0.5,.6,.25,	0,1,0.7,
		 .5,.6,0,		0,1,0.7,
		 
		 .6,.7,.25,		0,1,0.7,
		 0.5,.6,.25,	0,1,0.7,
		 .5,.6,0,		0,1,0.7,
		 
		 .6,.7,.25,		0,1,0.7,
		 .5,.7,-.1,		0,1,0.7,
		 .5,.6,0,		0,1,0.7,
		 
		 .6,.7,.25,		0,1,0.7,
		 .5,.7,-.1,		0,1,0.7,
		 .5,.8,.25,		0,1,0.7,
		 
		 .5,.8,0,		0,1,0.7,
		 .5,.7,-.1,		0,1,0.7,
		 .5,.8,.25,		0,1,0.7,
		 
		 .5,.8,0,		0,1,0.7,
		 .4,.9,.25,		0,1,0.7,
		 .5,.8,.25,		0,1,0.7,

		 .4,.9,.25,		0,1,0.7,
		 .4,.9,0.2,		0,1,0.7,
		 .5,.8,0,		0,1,0.7,
		 
		 //Right Back joint
		  .4,.4,.4,		0,1,0.7,
		 .45,.4,.35,	0,1,0.7,
		 0.5,.6,.35,	0,1,0.7,
		 
		 .4,.4,.4,		0,1,0.7,
		 0.5,.6,.35,	0,1,0.7,
		 .5,.6,.5,		0,1,0.7,
		 
		 .6,.7,.35,		0,1,0.7,
		 0.5,.6,.35,	0,1,0.7,
		 .5,.6,.5,		0,1,0.7,
		 
		 .6,.7,.35,		0,1,0.7,
		 .5,.7,.6,		0,1,0.7,
		 .5,.6,.5,		0,1,0.7,
		 
		 .6,.7,.35,		0,1,0.7,
		 .5,.7,.6,		0,1,0.7,
		 .5,.8,.35,		0,1,0.7,
		 
		 .5,.8,.5,		0,1,0.7,
		 .5,.7,.6,		0,1,0.7,
		 .5,.8,.35,		0,1,0.7,
		 
		 .5,.8,0.5,		0,1,0.7,
		 .4,.9,.35,		0,1,0.7,
		 .5,.8,.35,		0,1,0.7,

		 .4,.9,.35,		0,1,0.7,
		 .4,.9,0.4,		0,1,0.7,
		 .5,.8,.35,		0,1,0.7,

		//Left Front Joint
		.15,.4,.25,		0,1,0.7,
		.2,.4,.2,		0,1,0.7,
		0,.6,.25,		0,1,0.7,
		
		.2,.4,.2,		0,1,0.7,
		0,.6,.0,		0,1,0.7,
		0,.6,.25,		0,1,0.7,
		//
		 -.1,.7,.25,	0,1,0.7,
		0,.6,.0,		0,1,0.7,
		0,.6,.25,		0,1,0.7,
		
		 -.1,.7,.25,	0,1,0.7,
		0,.7,-.1,		0,1,0.7,
		0,.6,0,		0,1,0.7,
		//
		 -.1,.7,.25,	0,1,0.7,
		0,.7,-.1,		0,1,0.7,
		0,.8,.25,		0,1,0.7,

		0,.7,-.1,	0,1,0.7,
		 0,.8,.25,	0,1,0.7,
		0,.8,0,		0,1,0.7,

		.15,.9,.25, 0,1,0.7,
		0,.8,.25,	0,1,0.7,
		0,.8,0,		0,1,0.7,

		.15,.9,.25, 0,1,0.7,
		0.2,.9,.2,	0,1,0.7,
		0,.8,0,		0,1,0.7,

		//Left Back Joint
		.15,.4,.35,		0,1,0.7,
		.2,.4,.4,		0,1,0.7,
		0,.6,.35,		0,1,0.7,
		
		.2,.4,.4,		0,1,0.7,
		0,.6,.5,		0,1,0.7,
		0,.6,.35,		0,1,0.7,
		//
		 -.1,.7,.35,	0,1,0.7,
		0,.6,.5,		0,1,0.7,
		0,.6,.35,		0,1,0.7,
		
		 -.1,.7,.35,	0,1,0.7,
		0,.7,.6,		0,1,0.7,
		0,.6,.5,		0,1,0.7,
		//
		 -.1,.7,.35,	0,1,0.7,
		0,.7,.6,		0,1,0.7,
		0,.8,.35,		0,1,0.7,

		0,.7,.6,	0,1,0.7,
		 0,.8,.35,	0,1,0.7,
		0,.8,0.5,		0,1,0.7,

		.15,.9,.35, 0,1,0.7,
		0,.8,.35,	0,1,0.7,
		0,.8,.6,		0,1,0.7,

		.15,.9,.35, 0,1,0.7,
		0.2,.9,.4,	0,1,0.7,
		0,.8,0.5,		,1,0.7,
		
		//Top
		.4,.9,.2,	0,1,0.7,
		.2,.9,.2, 	0,1,0.7,
		.3,.9,.25, 	0,1,0.7,
		
		.3,.9,.25, 	0,1,0.7,
		.4,.9,.4, 	0,1,0.7,
		.2,.9,.4, 	0,1,0.7,
		
		.3,.9,.25, 	0,1,0.7,
		.4,.9,.4, 	0,1,0.7,
		.4,.9,.2, 	0,1,0.7,
		
		.3,.9,.25, 	0,1,0.7,
		.2,.9,.2, 	0,1,0.7,
		.2,.9,.4, 	0,1,0.7,
		
		
		];
		
		//this.indice =[];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc = [0.0,0.0,0.0];
		this.rot = [0.0,0.0,0.0];
	 }
	 //Again this could be inherited ... but not always...not all objects
	 
	 /*
	 leaf()
	 {
		 //This here creates the leaf sphere
		 var leaf_size = 360;
		 var red = 0;
		 var green = 1;
		 var blue = 0;
		 
		 for(var i = 0; i <= leaf_size; i++)
		 {
			 var radius = i * 2 *Math.PI/ leaf_size;
			 var xsphere = Math.sin(radius);
			 var ysphere = Math.cos(radius);
		 
		 for(var j = 0; j <= leaf_size; j++)
			{	
				var radius2 = j * 2 *Math.PI/ leaf_size;
				var xsphere1 = Math.sin(radius2);
				var ysphere2 = Math.cos(radius2);
			 
				vectors.push(xsphere * xsphere1);
				vectors.push(ysphere);
				vectors.push(ysphere2 * xsphere);
				vectors.push(red);
				vectors.push(green);
				vectors.push(blue);
				
				 //gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
				 //load the points.
				 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
				 this.loc = [0.0,0.0,0.0];
				 this.rot = [0.0,0.0,0.0];
				 this.addPoints +=1;
				
		 } 
	 }
			}
	 */
	 
	 render(program)
	 {
		//First we bind the buffer for triangle 1
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		var size = 3;          // 2 components per iteration
		var type = gl.FLOAT;   // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element     // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0;        // start at the beginning of the buffer
		gl.enableVertexAttribArray(positionAttributeLocation);
		gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
		
		//Now we have to do this for color
		var colorAttributeLocation = gl.getAttribLocation(program,"vert_color");
		//We don't have to bind because we already have the correct buffer bound.
		size = 3;
		type = gl.FLOAT;
		normalize = false;
		stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element
		offset = 3*Float32Array.BYTES_PER_ELEMENT;									//size of the offset
		gl.enableVertexAttribArray(colorAttributeLocation);
		gl.vertexAttribPointer(colorAttributeLocation, size, type, normalize, stride, offset);
				
		var tranLoc  = gl.getUniformLocation(program,'transform');
		gl.uniform3fv(tranLoc,new Float32Array(this.loc));
		var thetaLoc = gl.getUniformLocation(program,'rotation');
		gl.uniform3fv(thetaLoc,new Float32Array(this.rot));
		
		
		var primitiveType = gl.TRIANGLES;
		offset = 0;
		var count = 228; // Total count is 24 with all 8 sides
		gl.drawArrays(primitiveType, offset, count);
	 }






}
let formulario=document.getElementById('formulario');
    

    formulario.addEventListener('submit',function(e){
        
			let cotProv = document.getElementById("Prov").value;
			let ivaProd = document.getElementById("IVA").value;
			let fleteIngBrutos = document.getElementById("IBF").value;
			let procCpl = document.getElementById("Gan").value;
			let valDol = document.getElementById("DolarHoy").value; 
				e.preventDefault();

			function validacion(variable){

			let patron2=/^[0-9,.]*$/;
			if(variable.search(patron2)){
					
				swal('Ingrese solo números');

				}
			else{
					return true;
				}
			}

			let confirma1=validacion(cotProv);
			let confirma2=validacion(ivaProd);
			let confirma3=validacion(fleteIngBrutos);
			let confirma4=validacion(procCpl);
			let confirma5=validacion(valDol);

            //con esta declaración se resetea todos los campos ingresados al enviar
			// if(confirma1&&confirma2&&confirma3&&confirma4&&confirma5){
			// 	formulario.submit();
			// }
	}
	)
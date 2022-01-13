//define nuestra funciona de agregar impuesto

	function agregarImpuesto(subtotal, tasaiva, tasaImpuesto, tasaImpuesto2, valorDolar)
	{
		
	let total1 = subtotal * (1+(tasaiva/100));
	let total2 = total1 * (1+(tasaImpuesto/100));
	let total3 = total2 * (1+(tasaImpuesto2/100));
	let total = total3 * (valorDolar);
	return total;
	}


//calcula el valor de una factura y muestralo en una ventana alert

function total() {
	let cotProv = document.getElementById("Prov").value;
	let ivaProd = document.getElementById("IVA").value;
	let fleteIngBrutos = document.getElementById("IBF").value;
	let procCpl = document.getElementById("Gan").value;
	let valDol = document.getElementById("DolarHoy").value; 

	
	let valorFactura = agregarImpuesto(cotProv, ivaProd, fleteIngBrutos, procCpl, valDol);
	
	document.getElementById("totalfinal").innerHTML= "El precio final es =" + " $" + valorFactura.toFixed(2);}

	/* fin de la linea de scipt de calculadora */ 

//Función para limpiar campos

	function borrar() {

		document.getElementById("totalfinal").innerHTML= "El precio final es = $0.00 ";
	}
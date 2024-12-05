document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signature-form");
    const signatureContainer = document.getElementById("signature-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.toUpperCase();
        const surname = document.getElementById("surname").value.toUpperCase();
        const gender = document.getElementById("gender").value.toUpperCase();
        const position = document.getElementById("position").value.toUpperCase();
        const phone = document.getElementById("phone").value.toUpperCase();
		
		// Si el campo de género está vacío, lo dejamos fuera de la firma
		const genderText = gender ? `(${gender})` : '';  // Solo agregar el género si no está vacío
		
		// Mostrar el bloque de la firma
		const signatureBlock = document.getElementById("show-signature");
		signatureBlock.style.display = "block";

		// Desplazar la página al bloque de la firma
		signatureBlock.scrollIntoView({ behavior: "smooth" });

        // Crear la firma HTML
        const signatureHTML = `
            <table cellpadding="0" class="An" id=":qq">
				<tbody>
					<tr>
						<td class="Ap">
							<div id=":174" class="IN" style="display: block;">
								<div id=":qg" class="Am aiL IP Al editable Xp0HJf-LW-avf" hidefocus="true" aria-label="Signature" g_editable="true" role="textbox" aria-multiline="true" contenteditable="true" style="direction: ltr; font-family: 'Roboto Condensed', sans-serif; color: rgb(44,46,53);">
									<table style="border-spacing:0px;border-collapse:collapse;background-color:transparent;color:rgb(34,34,34);width:711.5px;max-width:1000px;font-family:&quot;Roboto Condensed&quot;,sans-serif">
										<tbody>
											<tr>
												<td style="padding:10px 10px 5px">
													<p style="margin:0px;font-size:16px;color:rgb(44,46,53)">${name} ${surname} ${genderText}</p>
													<p style="margin:0px;font-size:16px;padding-bottom:20px;color:rgb(44,46,53)">${position}</p>
													<p style="margin:0px;font-size:16px;padding-bottom:15px;color:rgb(44,46,53)">
														<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvGQVV9BEZ8Xk_AqwPTunNSiz_7cD03EGbOoh_y38_BTFXuK85tjbIH0stuEiZuwVgt5eW8mNN8tvVqOyBbq0drlFJMEH5rPOkEOkx_LD49uwuQUIuLqLwu43aMUzfqcya8Wg3SgVDwXvFy-sK6vo7BIuh?key=0yoYn1Wk--m5eohp_i2BZxI4" width="85" height="20" alt="Logo">
													</p>
													<p style="margin:0px;font-size:16px;color:rgb(44,46,53);padding-top:5px">${phone}</p>
													<p style="margin:0px;font-size:16px;color:rgb(44,46,53)">
														<a href="https://www.canadacanada.com/" style="background-color:transparent;color:rgb(44,46,53)" target="_blank">CANADACANADA.COM</a>
													</p>
												</td>
											</tr>
											<tr>
												<td style="padding:10px">
													<p style="margin:0px;font-size:0.6em;color:rgb(211,210,212);line-height:1.5">
														LAS MONTAÑAS DEL CANADA S.L., informs that all the data received through 
														online forms and/or by email will be processed with strict 
														confidentiality in accordance with the Privacy and Security Policy of 
														LAS MONTAÑAS DEL CANADA S.L., as well as with Regulation (EU) 2016/679 
														of the European Parliament and of the Council of 27 April 2016 on the 
														protection of natural persons with regard to the processing of personal 
														data and on the free movement of such data (General Data Protection 
														Regulation or GDPR). The purpose of processing these data is to respond 
														to the communications received and, if applicable, maintain the 
														corresponding contractual relations. The lawful basis being your 
														consent, performance of pre-contractual or contractual measures, 
														compliance with legal obligations and/or legitimate interests pursued by
														 LAS MONTAÑAS DEL CANADA S.L. To exercise the rights of access, 
														suppression/deletion, rectification, opposition, portability or 
														limitation, and for any clarification, you can contact us by sending us 
														an email to&nbsp;<a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a>.
														In any event, the interested have the right to file a claim in front of
														the appropriate Data Protection Authority. The personal data provided 
														will be kept for the time legally or contractually foreseen or while 
														your consent is maintained. The collected data will not be transferred, 
														with the exception of legal obligation or permission. Please contact&nbsp;<a href="mailto:info@canadacanada.com" style="background-color:transparent;color:rgb(17,85,204)" target="_blank">info@canadacanada.com</a>&nbsp;immediately
														about any change or modification related to the information you 
														provided, in order that it responds truthfully to your current personal 
														situation.
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
        `;

        // Mostrar la firma generada
        signatureContainer.innerHTML = signatureHTML;
		
		// Mostrar el botón para copiar la firma
		document.getElementById('copy-button').style.display = 'block';
    });
});

// Función para copiar la firma renderizada como si fuera seleccionada
document.getElementById('copy-button').addEventListener('click', function () {
    const signatureContent = document.getElementById('signature-container');

    // Crear un rango para la selección
    const range = document.createRange();
    range.selectNodeContents(signatureContent);

    // Obtener la selección de la ventana
    const selection = window.getSelection();
    selection.removeAllRanges();  // Limpiar selecciones anteriores
    selection.addRange(range);    // Seleccionar el contenido

    // Copiar al portapapeles
    document.execCommand('copy');

    alert('Firma copiada al portapapeles!');
});
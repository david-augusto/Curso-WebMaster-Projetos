<!DOCTYPE html>
<html>
<head>

	<title>Login Facebook</title>
	<!--Aplicar depois as metatags-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<header>
		<div class="center">
				<div class="logo">
					<h2>Facebook</h2>
				</div><!--logo-->

			<form method="post" class="form-login">
				<div class="form-element">
					<p>E-mail ou telefone</p>
					<input type="email" name="">
				</div><!--form-element-->
				<div class="form-element">
					<p>Senha</p>
					<input type="password" name="">
				</div><!--form-element-->
				<div class="form-element">
					<input type="submit" name="acao" value="Enviar">
				</div><!--form-element-->
			</form><!--form-login-->
			<div class="clear"></div>
		</div><!--center-->
	</header>

	<section class="main">
		<div class="center">
			<div class="img-pessoas">
				<img src="img1.png">
			</div><!--img-pessoas-->

			<div class="abrir-conta">
				<h2>Abrir sua conta</h2>
				<h3>É gratuito e sempre será</h3>

				<form class="criar-conta">
					<div class="w50">
						<input placeholder="Nome" type="text">
					</div><!--w50-->

					<div class="w50">
						<input placeholder="Sobrenome" type="text">
					</div><!--w50-->

					<div class="w100">
						<input placeholder="E-mail" type="email">
					</div><!--w100-->

					<div class="w100">
						<input placeholder="Senha" type="password">
					</div><!--w100-->

					<div class="w100">
						<h2>Data de Nascimento</h2>
						<select name="nascimento-dia" class="nascimento">
							<?php
								for ($i=1; $i <= 31; $i++) { 
							?>
							<option value="<?php echo $i; ?>"><?php echo $i; ?></option>
							<?php } ?>
						</select>
						<select name="nascimento-mes" class="nascimento">
							<option value="1">Janeiro</option>
							<option value="2">Fevereiro</option>
							<option value="3">Março</option>
							<option value="4">Abril</option>
							<option value="5">Maio</option>
							<option value="6">Junho</option>
							<option value="7">Julho</option>
							<option value="8">Agosto</option>
							<option value="9">Setembro</option>
							<option value="10">Outubro</option>
							<option value="11">Novembro</option>
							<option value="12">Dezembro</option>
						</select>
						<select name="nascimento-ano" class="nascimento">
							<?php
								for ($i=1960; $i <= 2024; $i++) { 
							?>
							<option value="<?php echo $i; ?>"><?php echo $i; ?></option>
							<?php } ?>
						</select>
						<div class="clear"></div>
					</div><!--w100-->

					<div class="w100">
						<div class="input-radio">
							<input type="radio" name="sexo" value="masculino">
							<h2>Masculino</h2>
						</div><!--radio-->
						<div class="input-radio">
							<input type="radio" name="sexo" value="feminino">
							<h2>Feminino</h2>
						</div><!--radio-->
						<div class="clear"></div>
					</div>

					<div class="w100">
						<input type="submit" name="acao" value="Cadastrar">
					</div><!--w100-->

				<div class="clear"></div>
				</form><!--criar-conta-->
			</div><!--abrir-conta-->

			<div class="clear"></div>
		</div><!--center-->
	</section><!--main-->

	<section class="linguas">
		<div class="center">
			<a class="selected-lingua" href="#">Português (Basil)</a>
			<a href="#">English (US)</a>
			<a href="#">Español</a>
			<a href="#">Français (France)</a>
			<a href="#">Italiano</a>
			<a href="#">Deutsch</a>
			<a href="#">العربية</a>
			<a href="#">हिन्दी</a>
			<a href="#">中文(简体)</a>
			<a href="#">日本語</a>

		</div><!--center-->

		<div style="border:0; padding-top: 10px;" class="center">
			<a href="#">Cadastre-se</a>
			<a href="#">Entrar</a>
			<a href="#">Messenger</a>
			<a href="#">Facebook Lite</a>
			<a href="#">Celular</a>
			<a href="#">Encontrar amigos</a>
			<a href="#">Pessoas</a>
			<a href="#">Páginas</a>
			<a href="#">Locais</a>
			<a href="#">Jogos</a>
			<a href="#">Locais</a>
			<a href="#">Marketplace</a>
			<a href="#">Vídeos</a>
			<a href="#">Grupos</a>
			<a href="#">Receitas</a>
			<a href="#">Look</a>
			<a href="#">Moments</a>
			<a href="#">Instagram</a>
			<a href="#">Local</a>
			<a href="#">Sobre</a>
			<a href="#">Criar anúncio</a>
			<a href="#">Criar Página</a>
			<a href="#">Desenvolvedores</a>
			<a href="#">Carreira</a>
			<a href="#">Privacidade</a>
			<a href="#">Cookies</a>
			<a href="#">Opções de anúncio</a>
			<a href="#">Termos</a>
			<a href="#">Ajuda</a>

		</div><!--center-->
	</section><!--linguas-->
</body>
</html>
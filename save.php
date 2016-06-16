<?php

$uus_kysimus = $_POST['uus_kysimus'];
$uus_var1 = $_POST['uus_var1'];
$uus_var2 = $_POST['uus_var2'];
$uus_var3 = $_POST['uus_var3'];
$uus_var4 = $_POST['uus_var4'];

$oige_var = $_POST['oige_var'];
$faili_nimi = $_POST['faili_nimi'];


$file = fopen("Taring/kysimused/$faili_nimi.kys", "a") or die("Unable to open file!");
if(file_exists("Taring/kysimused/$faili_nimi.kys")){
	fwrite($file, 'jah;'.$uus_kysimus.';'.$uus_var1.';'.$uus_var2.';'.$uus_var3.';'.$uus_var4.';'.$oige_var.';0;1;0;1;-16777216;-1;-16776961');
  fwrite($file, "\n");
  fclose($file);
}
?>

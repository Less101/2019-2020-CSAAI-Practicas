seal = imread('SEAL.jpg');
% Separación de componentes
seal_R = seal(:,:,1);
seal_G = seal(:,:,2);
seal_B = seal(:,:,3);
Imag_filtr =  seal_R + seal_B
imtool(Imag_filtr)
% filtro L.S.I. suavizante tipo mediana
I_median = medfilt2(Imag_filtr, [27 27], 'symmetric');
figure(1), imshow(I_median), title('jal');
% Convertir la imagen a binaria
I_BW = im2bw(I_median, 100/255);
figure(2), imshow(I_BW), title('mediana');
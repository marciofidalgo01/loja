from django.db import models


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Subcategoria(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name="subcategorias"
    )

    def __str__(self):
        return f"{self.categoria.nome} - {self.nome}"


class Produto(models.Model):
    nome = models.CharField(max_length=250)
    preco = models.DecimalField(max_digits=12, decimal_places=2)
    ativo = models.BooleanField(default=False)
    descricao = models.TextField()
    
    url_imagem = models.URLField(blank=True, null=True)

    subcategoria = models.ForeignKey(
        Subcategoria,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="produtos"
    )

    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
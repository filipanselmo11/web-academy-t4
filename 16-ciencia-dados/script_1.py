import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt

data = {
  "Nome Album": ["From Zero", "Papercuts: Instrumentals", "Papercuts", "Meteora 20th Anniversary Edition", "Hybrid Theory (20th Anniversary Edition)", "One More Light Live", "One More Light", "The Hunting Party: Acapellas + Instrumentals", "The Hunting Party", "RECHARGED", "LIVING THINGS: Acapellas and Instrumentals", "LIVING THINGS"],
  "Data de Lancamento": ["2024-11-15", "2024-06-28", "2024-04-12", "2023-04-07", "2020-10-09", "2017-12-15", "2017-05-19", "2014-06-09", "2014-06-09", "2013-10-25", "2012-06-19", "2012-06-19"],
  "Total de Faixas": [11, 20, 20, 89, 80, 16, 10, 22, 12, 14, 22, 12],
  "Popularidade": [91, 57, 67, 72, 61, 56, 73, 37, 67, 55, 45, 77]
}

df = pd.DataFrame(data=data)

df["Data de Lancamento"] = pd.to_datetime(df["Data de Lancamento"])

st.title("Análise de Dados dos Álbuns")
st.header("Visão Geral dos Dados")
st.write("Tabela completa dos dados:")
st.dataframe(df)

st.write("Estatísticas descritivas:")
st.write(df.describe())

st.header("Análise das Métricas")
st.write("Qual é o álbum mais popular ?")
album_popular = df.loc[df["Popularidade"].idxmax()]
st.write(f"Álbum mais popular: **{album_popular['Nome Album']}** com popularidade de {album_popular['Popularidade']}.")

st.write("Qual é o álbum mais antigo?")
album_antigo = df.loc[df["Data de Lancamento"].idxmin()]
st.write(f"Álbum mais antigo: **{album_antigo['Nome Album']}** lançado em {album_antigo['Data de Lancamento'].date()}.")

st.header("Exploração Gráfica Interativa")

st.subheader("Popularidade dos Álbuns")
pop_min, pop_max = st.slider("Selecione o intervalo de popularidade:", 0, 100, (50, 80))
filtered_df = df[(df["Popularidade"] >= pop_min) & (df["Popularidade"] <= pop_max)]
st.write("Álbuns no intervalo selecionado:")
st.dataframe(filtered_df)

st.subheader("Gráfico de Popularidade")
fig, ax = plt.subplots()
filtered_df.plot.bar(x="Nome Album", y="Popularidade", ax=ax, color="teal")

st.subheader("Relação entre Total de Faixas e Popularidades")
fig, ax = plt.subplots()
ax.scatter(df["Total de Faixas"], df["Popularidade"], color="orange")
ax.set_xlabel("Total de Faixas")
ax.set_ylabel("Popularidade")
ax.set_title("Total de Faixas vs Popularidade")
st.pyplot(fig)

st.subheader("Lançamentos ao Longo do Tempo")
fig, ax = plt.subplots()
df.sort_values("Data de Lancamento").plot(x="Data de Lancamento", y="Popularidade", ax=ax, marker="o", color="green")
ax.set_ylabel("Popularidade")
st.pyplot(fig)
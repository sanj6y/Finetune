import streamlit as st
import pandas as pd
import numpy as np

st.title("Finetune")

# add box for user to input link
link = st.text_input("Enter the link of the article you want to finetune:")
# add button to enter link to send it to backend
if st.button('Finetune'):
    # send link to backend
    pass

# add box for user to input pdf resume
resume = st.file_uploader("Upload your resume in PDF format:")
# add button to enter resume to send it to backend
if st.button('Upload'):
    # send resume to backend
    pass
FROM gitpod/workspace-full
# Install mkdocs and theme
RUN pip install mkdocs
RUN pip install mkdocs-windmill

terraform {
  required_version = ">= 1.5.3"
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.23.0"
    }
    template = {
      source = "hashicorp/template"
      version = "2.2.0"
    }    
  }
}

resource "kubernetes_namespace" "namespace" {
  metadata {
    name = var.namespace
  }
}
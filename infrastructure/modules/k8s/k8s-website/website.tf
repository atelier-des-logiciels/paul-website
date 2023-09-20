resource "kubernetes_deployment_v1" "website" {
  metadata {
    name = "website"
    namespace = kubernetes_namespace.namespace.metadata[0].name
    labels = {
      app = "website"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "website"
      }
    }
    template {
      metadata {
        labels = {
          app = "website"
        }
      }
      spec {
        container {
          image = "ghcr.io/atelier-des-logiciels/paul-website:master" 
          name = "website"
          image_pull_policy = "Always"

          port {
            container_port = 8080 
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "website" {
  depends_on = [
    kubernetes_deployment_v1.website
  ]
  metadata {
    namespace = kubernetes_namespace.namespace.metadata[0].name 
    name = "website"
  }
  spec {
    selector = {
      app = "website" 
    }
    port {
      port        = 8080 
      target_port = 8080
    }

    type = "ClusterIP" 
  }
}

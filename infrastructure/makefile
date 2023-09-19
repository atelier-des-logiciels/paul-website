TIMEOUT = 30m
SHELL := /bin/bash

cmd=plan
t=any

include environments.mk

define check-env
	@if [ -z "$($(env))" ]; then \
		echo "Environment is not defined"; \
		exit 1; \
	fi
endef

path = $(if $(value $(env)),$(value $(env)),)/${module}

.PHONY: all devenv tf-plan tf-plan-all tf-apply tf-apply-all tf-apply-all-auto-approve tf-destroy tf-destroy-all tf-output tf-force-unlock

all:

tf-lint:
	tflint --recursive

tf-plan tf-apply tf-destroy tf-show tf-init:
	$(call check-env)
	cd ${path} && terragrunt $(subst tf-,,$@)

tf-import:
	cd ${path} && terragrunt import ${r} ${id}

tf-init-migrate-state:
	cd ${path} && terragrunt init -migrate-state	

tf-plan-all tf-apply-all tf-destroy-all:
	$(call check-env)
	$(eval CMD := $(subst tf-,,$@))
	$(eval ARG := $(subst -all,,$(CMD)))
	cd ${path} && terragrunt run-all $(ARG)

tf-apply-all-auto-approve:
	$(call check-env)
	cd ${path} && terragrunt run-all apply --terragrunt-non-interactive

tf-destroy-all-auto-approve:
	$(call check-env)
	cd ${path} && terragrunt run-all destroy --terragrunt-non-interactive

tf-pull:
	$(call check-env)
	@cd ${path} && terragrunt state pull 

tf-state-list:
	$(call check-env)
	cd ${path} && terragrunt state list

tf-state-rm:
	$(call check-env)
	cd ${path} && terragrunt state rm ${t}

tf-push:
	$(call check-env)
	cd ${path} && terragrunt state push ${s}

tf-graph:
	$(call check-env)
	cd ${path} && terragrunt graph | dot -Tsvg > graph.svg

tf-output:
	$(call check-env)
	@cd ${path} && terragrunt output ${o} | sed -e 's/"//g'

tf-force-unlock:
	cd ${path} && terragrunt force-unlock ${l}

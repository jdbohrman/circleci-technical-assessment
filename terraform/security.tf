# ALB Security Group: Edit this to restrict access to the application
resource "aws_security_group" "lb" {
  description = "controls access to the ALB"
  vpc_id      = "${aws_vpc.main.id}"

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "ecs_tasks" {
  description = "Access to the Fargate containers"
  vpc_id      = "${aws_vpc.main.id}"
}

resource "aws_security_group_rule" "ecs_tasks_egress" {
  type            = "egress"

  protocol        = "-1"
  from_port       = 0
  to_port         = 0
  cidr_blocks     = ["0.0.0.0/0"]

  security_group_id = "${aws_security_group.ecs_tasks.id}"
}

resource "aws_security_group_rule" "ecs_tasks_lb_ingress" {
  type            = "ingress"

  protocol        = "-1"
  from_port       = 0
  to_port         = 0

  security_group_id = "${aws_security_group.ecs_tasks.id}"
  source_security_group_id = "${aws_security_group.lb.id}"
}

resource "aws_security_group_rule" "ecs_tasks_self_ingress" {
  type            = "ingress"

  protocol        = "-1"
  from_port       = 0
  to_port         = 0

  security_group_id = "${aws_security_group.ecs_tasks.id}"
  self = true
}
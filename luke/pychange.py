#!/usr/bin/env python
__author__ = 'luke'

import dot_parser as parse
from pydot import Dot, Node, Edge
from scanf import sscanf
import json


def node_to_json(node):
    if not isinstance(node,Node):
        return

    d = dict()
    if node.get_pos():
        d['x'],d['y'] = sscanf(node.get_pos(), '"%f,%f"')
    if node.get_height() and node.get_width():
        d['height'] = sscanf(node.get_height(),'"%f"')[0]
        d['width'] = sscanf(node.get_width(),'"%f"')[0]

    d['name'] = node.get_name()

    return json.dumps(d)
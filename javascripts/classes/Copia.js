import _ from 'lodash';
var rita = require('rita'); // I don't know why this works

import Grammar from '../../data/grammar.yml';
import Adjectives from '../../data/adjectives.yml';

export default class Copia {
	static defaultProps = {
		adjective_chance: 65
	}
	
	constructor(props) {
		this.props = _.assignInWith({}, props, Copia.defaultProps, (o,s) => { return _.isUndefined(o) ? s : o; });
		
		this.grammar = new RiGrammar(Grammar);
	}

	adjectivize(string) {
		var percentage, adjective;
		
		adjective = '';
		
		percentage = _.random(1,100);
		if(percentage <= this.props.adjective_chance) {
			adjective = _.sample(Adjectives.adjectives) + ' ';
		}

		return adjective + string;
	}
	
	pluralize(string) {
		return this.adjectivize(RiTa.pluralize(string));
	}
	
	get_copia(number) {
		if(number === undefined) {
			number = 1;
		}
		return _.map(_.times(number, String), (x) => { 
			x = this.grammar.expand(this); // Pass this to expand() so we have access to helper methods
			
			x = _.upperFirst(x);
			
			// We have to do this because RiTa's recursion is broken (so it can't evaluation `adjectivize(`a(animal)`)`:
			x = x.replace(/ a ([aeiou])/g,' an $1');
			x = x.replace(/^A ([aeiou])/,'An $1');
			
			// Fix subject object agreement:
			x = x.replace(/s was/,'s were');
			
			x = x.replace(/were ate/, 'were eaten');
			
			return x;
			
		});
	}
}
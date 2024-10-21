import React, { useState } from 'react';
import { Select, Popover, SelectHeader, SelectContent, SelectList, SelectItem } from '../Select/Select'

const SelectWrapper = ({ enableSearch }) => {
    const [selectedValue, setSelectedValue] = useState([]);

    const handleSelect = (value) => {
        setSelectedValue((prev) =>{
            return [...prev, value]
        }
        );
    };


    const technologies = [
        "React",
        "Vue",
        "Angular",
        "Svelte",
        "Ember",
        "Backbone",
        "Meteor",
        "Knockout",
        "Polymer",
        "Aurelia",
        "Alpine.js",
        "Preact",
        "LitElement",
        "Stencil",
        "Elm",
        "Mithril",
        "Dojo",
        "Hyperapp"
    ];

    return (
        <Select value={selectedValue} onSelect={handleSelect} multiselect placeholder='Select Tech'>
            <Popover>
                <SelectHeader>
                    <h1>Technology</h1>
                </SelectHeader>
                <SelectContent>
                    <SelectList>
                        {technologies.map((tech, index) => (
                            <SelectItem
                                key={index}
                                value={tech}
                            />
                        ))}
                    </SelectList>
                </SelectContent>
            </Popover>
        </Select>
    );
};

export default SelectWrapper;

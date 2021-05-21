#!/usr/bin/env node
const asciify = require('asciify-image')
const chalk = require('chalk')
const Table = require('cli-table3')
const path = require('path')

// Info
const data = {
  name: chalk.green('                     Adarsh Bhardwaj'),
  handle: chalk.green('Alchemist'),
  bio: chalk.white('               Student, Developer and an Impassioned Coder'),
  job: chalk.yellow('First year student at BITS Pilani'),
  github: chalk.yellow('https://github.com/Alchemishty'),
  linkedin: chalk.yellow('https://www.linkedin.com/in/adarsh-bhardwaj-5b0ab720b/'),
  email: chalk.yellow('adarsh.bhardwaj2020@gmail.com'),
  labelJob: chalk.cyan('    Occupation:'),
  labelGitHub: chalk.cyan('    GitHub:'),
  labelLinkedIn: chalk.cyan('    LinkedIn:'),
  labelContact: chalk.cyan('    Contact:')
}

const table = new Table()
const newline = '\n'
const heading = `${data.name} - ${data.handle}`
const bio = `${data.bio}`
const working = `${data.labelJob}  ${data.job}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelContact}  ${data.email}`

const getAvatar = async () => {
  const image = path.join(__dirname, '..', 'assets', 'avatar.png')
  let img
  try {
    img = await asciify(image, {
      fit: 'box',
      width: '30%'
    })
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }

  return img
}

async function getOutput () {
  const avatar = await getAvatar()
  const output = newline + newline + heading + newline + bio + newline.repeat(2) + working + newline + newline + githubing + newline + newline + linkedining + newline + newline + carding

  table.push(
    [avatar, { content: output, vAlign: 'center' }]
  )

  console.log(table.toString())
}

getOutput()

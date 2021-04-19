#!/usr/bin/python3
# coding: utf-8

from os import system

attempt = 0


def pod_install():
    try:
        system('yarn install:pods')

    except Exception:
        system('npm run install:pods')


while attempt != 4:
    feedback_string = f'Try again. ({3 - attempt} available attempts)' if attempt != 3 else 'Ignoring PODS.'

    try:
        choice = input(
            'Do you intend to develop the iOS version of this APP? (y/n) > ')
        choice = choice.upper()

        if choice in ['Y', 'YES']:
            try:
                pod_install()

            except Exception:
                print(
                    'ERROR - Try install PODS manually with: \n\n cd ios && pod install && cd ..\n')

            break

        elif choice in ['N', 'NO']:
            break

        else:
            attempt += 1
            print(f'Invalid option. {feedback_string} ')

    except Exception:
        attempt += 1
        print(f'Invalid option. {feedback_string} ')

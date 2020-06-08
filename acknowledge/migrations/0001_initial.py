# Generated by Django 2.2.5 on 2020-06-08 19:21

import acknowledge.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ack_guidelinesname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('publiction_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='guidelLines/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='ack_NavyInstructionname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('publiction_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='navy_instruction/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='ack_Navyname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('publiction_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='navy_orders/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='ack_policyname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('policy_name', models.CharField(max_length=200, unique=True)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='ack_policypolicyfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='policy/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF'])])),
                ('updated_on', models.DateField(auto_now=True, null=True)),
                ('policies_name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ack_publicationfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='publication/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF'])])),
                ('updated_on', models.DateField(auto_now=True, null=True)),
                ('publication_name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='acknoledge_menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('menu_name', models.CharField(max_length=200, unique=True)),
                ('url_link', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='acknowledge_parent_menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('menu_name', models.CharField(max_length=200, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('population', models.PositiveIntegerField()),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acknowledge.Country')),
            ],
        ),
        migrations.CreateModel(
            name='BRsmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('file', models.FileField(blank=True, null=True, upload_to='brsfiles/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_title', models.CharField(max_length=200)),
                ('navyinstructionfile', models.FileField(blank=True, null=True, upload_to='brsfoldermenus/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 8}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='brsmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.BRsmenu')),
            ],
        ),
        migrations.CreateModel(
            name='ack_subStandardsmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('file', models.FileField(blank=True, null=True, upload_to='standards_file/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_title', models.CharField(max_length=200)),
                ('standardfile', models.FileField(blank=True, null=True, upload_to='standards/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 4}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_substandardsmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subStandardsmenu')),
            ],
        ),
        migrations.CreateModel(
            name='ack_subpublicationmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('publicationfile', models.FileField(blank=True, null=True, upload_to='publicattion/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg', 'JPEG'])])),
                ('folder_title', models.CharField(max_length=200)),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 2}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_subpublicationmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subpublicationmenu')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='ack_subNHQe_Librarylinesmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('file', models.FileField(blank=True, null=True, upload_to='elibraryfiles/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_title', models.CharField(max_length=200)),
                ('navyinstructionfile', models.FileField(blank=True, null=True, upload_to='elibrary/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 7}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_subnohqsmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subNHQe_Librarylinesmenu')),
            ],
        ),
        migrations.CreateModel(
            name='ack_subNavy_Orderssmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('file', models.FileField(blank=True, null=True, upload_to='navy_ordersfile/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_title', models.CharField(max_length=200)),
                ('navyfile', models.FileField(blank=True, null=True, upload_to='navy_orders/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 5}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_subnavy_ordersmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subNavy_Orderssmenu')),
            ],
        ),
        migrations.CreateModel(
            name='ack_subNavy_Instructionssmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('file', models.FileField(blank=True, null=True, upload_to='navy_instructionfile/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_title', models.CharField(max_length=200)),
                ('navyinstructionfile', models.FileField(blank=True, null=True, upload_to='navy_instruction/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 6}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_subnavy_instructionmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subNavy_Instructionssmenu')),
            ],
        ),
        migrations.CreateModel(
            name='ack_submenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('folder_title', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, null=True, upload_to='policy/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF'])])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 1}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_submenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='children', to='acknowledge.ack_submenu')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='ack_subGuidelinesmenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('folder_title', models.CharField(max_length=200)),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('submenu_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='guidelines/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('guidelinefile', models.FileField(blank=True, null=True, upload_to='guidelLines/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('parent', models.ForeignKey(blank=True, limit_choices_to={'id': 3}, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ask_subguidelinesmenues', to='acknowledge.acknoledge_menu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_subGuidelinesmenu')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='ack_Standardsname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('publiction_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='standards/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='standards_name', to='acknowledge.ack_subStandardsmenu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_Standardsname')),
            ],
        ),
        migrations.CreateModel(
            name='ack_publicationname',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('updated_on', models.DateField(auto_now=True)),
                ('publiction_name', models.CharField(max_length=200, unique=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='publication/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'PDF', 'png', 'jpg', 'JPEG']), acknowledge.models.validate_image])),
                ('folder_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=2)),
                ('menu_type', models.SmallIntegerField(choices=[(1, 'One'), (2, 'Two')], default=1)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='public_name', to='acknowledge.ack_subpublicationmenu')),
                ('parent_ob', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='acknowledge.ack_publicationname')),
            ],
        ),
    ]

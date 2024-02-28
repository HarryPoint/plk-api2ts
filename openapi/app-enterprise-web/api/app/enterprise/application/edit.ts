import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/应用相关/editUsingPOST
*/
export default function fetchMethod(options: { data: IProcessEditingDTO }, extraOptions?: any) {
    return http<IJSONResultProcessVersionRespondsToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程编辑DTO */
export interface IProcessEditingDTO {
    /** id */
    id?: string;
    /** 名称 */
    lastName: string;
    /** 编号 */
    code?: string;
    /** 应用类型 */
    type?: EProcessEditingDTO_type;
    /** 简介 */
    lastDescription?: string;
    /** 发布终端值合计 */
    lastPublishTotal?: number;
    /** 是否系统级流程 */
    isSystem?: EProcessEditingDTO_isSystem;
    /** 系统流程类型 */
    flowPathSystemType?: EProcessEditingDTO_flowPathSystemType;
    /** 是否是树状应用 */
    isTree?: EProcessEditingDTO_isTree;
    /** 表单集 */
    formFields?: IProcessFormFieldEditDTO[];
    /** 节点 */
    flowPathNode?: IProcessNodeEditDTO3;
    /** 权限 */
    permission?: IProcessFormPermissionsEditDTO;
    /** 业务事件集 */
    flowPathEvents?: IProcessEventEditDTO[];
    /** 自定义通知内容关联的字段SerialNo */
    customFieldSerialNos?: string[];
    /** 排序 */
    sort?: number;
    /** 打印模板 */
    printTemplates?: IProcessPrintTemplateEditDTO[];
    /** 发布企业路由位置 */
    publishEnterpriseRouterList?: IPublishEnterpriseRouterEditDTO[];
    /** 流程结果通知 */
    flowPathResultNotify?: EProcessEditingDTO_flowPathResultNotify;
    /** 重新提交通知 */
    recommitNotify?: EProcessEditingDTO_recommitNotify;
    /** 作废停用通知 */
    invalidNotify?: EProcessEditingDTO_invalidNotify;
    /** 删除通知 */
    deleteNotify?: EProcessEditingDTO_deleteNotify;
    /** 应用访问链接 */
    accessUrl?: string;
    /** 代办设置 */
    todoConfig?: IAgencyAllocation;
    /** 详细页配置列表 */
    detailPageConfigList?: IFlowPathDetailPageConfigEditDTO[];
    /** 应用服务包ID */
    appServicePackId?: string;
    /** 应用级别 */
    applicationLevel?: EProcessEditingDTO_applicationLevel;
    /** undefined */
    isInitAppServicePack?: EProcessEditingDTO_isInitAppServicePack;
}
/** 流程表单字段编辑DTO */
export interface IProcessFormFieldEditDTO {
    /** id */
    id?: string;
    /** 类型分组 */
    typeGroup?: EProcessFormFieldEditDTO_typeGroup;
    /** 类型 */
    type: EProcessFormFieldEditDTO_type;
    /** 是否是系统表单字段 */
    isSystem?: EProcessFormFieldEditDTO_isSystem;
    /** 是否是系统预置字段 */
    isSystemPreset?: EProcessFormFieldEditDTO_isSystemPreset;
    /** 是否是系统必填字段 */
    isSystemMust?: EProcessFormFieldEditDTO_isSystemMust;
    /** 是否在表格中展示列 */
    isTableShow?: EProcessFormFieldEditDTO_isTableShow;
    /** 是否是表格内字段 */
    isTableField?: EProcessFormFieldEditDTO_isTableField;
    /** 是否是套件 */
    isKit?: EProcessFormFieldEditDTO_isKit;
    /** 套件类型 */
    kitType?: EProcessFormFieldEditDTO_kitType;
    /** 套件字段类型 */
    kitColumnType?: EProcessFormFieldEditDTO_kitColumnType;
    /** 表格类型 */
    tableType?: EProcessFormFieldEditDTO_tableType;
    /** 选择类型 */
    selectorType?: EProcessFormFieldEditDTO_selectorType;
    /** 名称 */
    name: string;
    /** 编号 - 由前端生成，生成时和序号值(serialNo)一致 */
    code?: string;
    /** 序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    serialNo: string;
    /** 提示 */
    tip?: string;
    /** 说明描述 */
    description?: string;
    /** 宽度 */
    span?: number;
    /** 默认值类型 */
    defaultType?: EProcessFormFieldEditDTO_defaultType;
    /** 默认日期类型 */
    defaultDateType?: EProcessFormFieldEditDTO_defaultDateType;
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"]  - 地址则 JSON数组是 ["region_code" : "XXX", "detail_address": "详细地址"] - 定位 JSON数组是：{"location":{"lat":xx, "lng":zzz}, "detail_address":""}  */
    defaultValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: IProcessFormFormulaFieldDTO[];
    /** 编码规则 */
    codeNumberRules?: IEditTheDTOForProcessFormFieldEncodingRuleDetails[];
    /** 是否必填 */
    isMust: EProcessFormFieldEditDTO_isMust;
    /** 允许扫码 */
    isScan?: EProcessFormFieldEditDTO_isScan;
    /** 数值类型 */
    numberType?: EProcessFormFieldEditDTO_numberType;
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否允许负数 */
    canNegative?: EProcessFormFieldEditDTO_canNegative;
    /** 数值格式 */
    numberFormat?: EProcessFormFieldEditDTO_numberFormat;
    /** 日期类型 */
    dateType?: EProcessFormFieldEditDTO_dateType;
    /** 选项集 - 值为code、name的json对象集 */
    selectorList?: IFormFieldOption[];
    /** 选项集来源 */
    selectorOptionSource?: EProcessFormFieldEditDTO_selectorOptionSource;
    /** 选项集来源业务编码 */
    selectorOptionSourceBusinessCode?: EProcessFormFieldEditDTO_selectorOptionSourceBusinessCode;
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: IProcessFormFieldDropDownOptionAssociatedDisplayEditDTO[];
    /** 选项集是否可修改 */
    isCanModifySelectorOption?: EProcessFormFieldEditDTO_isCanModifySelectorOption;
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单编码 */
    formDetailRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段SerialNo */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单筛选条件组集 */
    formRpFilterGroups?: IProcessFormAssociatedFormFilterGroupEditDTO[];
    /** 关联表单填充规则集 */
    formRpFills?: IProcessFormAssociatedFormFillEditDTO[];
    /** 表格字段集 */
    tableCustomFormFields?: IProcessFormFieldEditDTO[];
    /** 选择框样式 */
    style?: EProcessFormFieldEditDTO_style;
    /** 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}] */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}] */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 组织类型 */
    organizationType?: EProcessFormFieldEditDTO_organizationType;
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 是否自动获取位置 */
    isAutoGetLocation?: EProcessFormFieldEditDTO_isAutoGetLocation;
    /** 地址类型 */
    addressType?: EProcessFormFieldEditDTO_addressType;
    /** 全局不允许重复 */
    unableRepeat?: EProcessFormFieldEditDTO_unableRepeat;
    /** 表格内不允许重复 */
    unableRepeatInTable?: EProcessFormFieldEditDTO_unableRepeatInTable;
    /** 重复提示 */
    repeatTip?: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: EProcessFormFieldEditDTO_isUseEmployeesWithAccounts;
    /** 排序 */
    sort?: number;
    /** 关联查询显示样式 */
    associationQueryShowStyle?: EProcessFormFieldEditDTO_associationQueryShowStyle;
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageEditDTO;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
    /** 是否启用超链接, 默认为N */
    isHyperlinkEnabled?: EProcessFormFieldEditDTO_isHyperlinkEnabled;
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: EProcessFormFieldEditDTO_isInsideTableBatchSelect;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
}
/** 流程表单公式字段DTO */
export interface IProcessFormFormulaFieldDTO {
    /** 类型 */
    type: EProcessFormFormulaFieldDTO_type;
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 用到的函数类型 */
    funType?: EProcessFormFormulaFieldDTO_funType;
}
/** 流程表单字段编码规则明细编辑DTO */
export interface IEditTheDTOForProcessFormFieldEncodingRuleDetails {
    /** 设置类型 */
    type?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_type;
    /** 日期格式 - 用于日期 */
    dateFormat?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_dateFormat;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_isCodeAccording;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
}
/** FormFieldOption */
export interface IFormFieldOption {
    /** undefined */
    name?: string;
    /** undefined */
    code?: string;
    /** undefined */
    color?: string;
}
/** 流程表单字段下拉选项关联显示编辑DTO */
export interface IProcessFormFieldDropDownOptionAssociatedDisplayEditDTO {
    /** 下拉选项的code */
    selectorItemCode?: string;
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: string[];
}
/** 流程表单关联表单筛选条件组编辑DTO */
export interface IProcessFormAssociatedFormFilterGroupEditDTO {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessFormAssociatedFormFilterEditDTO[];
    /** 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组 */
    isSystemDefault?: EProcessFormAssociatedFormFilterGroupEditDTO_isSystemDefault;
}
/** 流程表单关联表单筛选条件编辑DTO */
export interface IProcessFormAssociatedFormFilterEditDTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EProcessFormAssociatedFormFilterEditDTO_compareType;
    /** 判断对象类型 */
    compareObjType?: EProcessFormAssociatedFormFilterEditDTO_compareObjType;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: EProcessFormAssociatedFormFilterEditDTO_dateDynamicRange;
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: EProcessFormAssociatedFormFilterEditDTO_isUseDateShowFormat;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: EProcessFormAssociatedFormFilterEditDTO_isDisableEdit;
}
/** 流程表单关联表单填充编辑DTO */
export interface IProcessFormAssociatedFormFillEditDTO {
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 被采取的字段序号值的下级字段序号值， 这里的序列号 - 来自于主体/主表 */
    secondarySourceFieldSerialNo?: string;
    /** 被采取的字段序号值的下级字段编码，这里的编码 - 来自于主体/主表  */
    secondarySourceFieldCode?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: EProcessFormAssociatedFormFillEditDTO_fillWay;
    /** 是否禁用编辑- 默认是 N */
    isDisableEdited?: EProcessFormAssociatedFormFillEditDTO_isDisableEdited;
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: EProcessFormAssociatedFormFillEditDTO_isAllowModificationOfFillContent;
}
/** FlowPathFormFieldDataLinkageEditDTO */
export interface IFlowPathFormFieldDataLinkageEditDTO {
    /** id */
    id?: string;
    /** 数据来源应用编码（即联动表单） */
    sourceFormRpCode?: string;
    /** 数据来源应用表格编码（即联动表单） */
    sourceFormDetailRpCode?: string;
    /** 数据来源字段编码（取值字段编号） */
    sourceFieldCode?: string;
    /** 数据来源字段序列号（取值字段的序列号） */
    sourceFieldSerialNo?: string;
    /** 筛选条件组集 */
    filterGroups?: IProcessFormAssociatedFormFilterGroupEditDTO[];
}
/** FlowPathFormFieldValueLimitRuleEditDTO */
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    /** 值限制规则条件 */
    limitRuleCondition?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition;
    /** 值限制规则类型 */
    limitRuleType?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}
/** 流程节点编辑DTO_3 */
export interface IProcessNodeEditDTO3 {
    /** id */
    id?: string;
    /** 节点类型 */
    type: EProcessNodeEditDTO3_type;
    /** 名称 */
    name: string;
    /** 序号值 - 由前端生成，需要每个节点唯一，用于新增节点时，互相关联用 */
    serialNo: string;
    /** 序号值 - 由前端生成，需要每个节点唯一，用于新增节点时，互相关联用 */
    code: string;
    /** 负责人集 */
    leaderUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 抄送人集 */
    carbonCopyUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 审批类型 */
    approvalType?: EProcessNodeEditDTO3_approvalType;
    /** 是否允许回退 */
    isBack?: EProcessNodeEditDTO3_isBack;
    /** 回退类型 */
    backType?: EProcessNodeEditDTO3_backType;
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: string;
    /** 回退流程节点序列值 - 返回指定节点时有值 */
    backFlowPathNodeSerialNo?: string;
    /** 表单操作权限集 */
    formFieldPermissions?: IProcessNodeFormOperationPermissionEditDTO[];
    /** 条件组集 - 节点类型是子分支节点时必传 */
    condiGroups?: IProcessNodeConditionBranchGroupEditDTO[];
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent: EProcessNodeEditDTO3_isCustomSubmitContent;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout: EProcessNodeEditDTO3_enabledTimeout;
    /** 超时类型 */
    flowPathNodeTimeoutConfEditDtos?: IProcessNodeEditDTO1[];
    /** 下节点信息 */
    nextNode?: IProcessNodeEditDTO3;
    /** 分支子节点 - 节点类型是分支节点时必传 */
    branches?: IProcessNodeEditDTO3[];
    /** 节点启动方式 */
    launchType: EProcessNodeEditDTO3_launchType;
    /** 执行类型 */
    executeType: EProcessNodeEditDTO3_executeType;
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent: EProcessNodeEditDTO3_isCustomAcceptContent;
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: EProcessNodeEditDTO3_isShowAcceptButton;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent: EProcessNodeEditDTO3_isCustomPassApprovalContent;
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent: EProcessNodeEditDTO3_isCustomRefuseApprovalContent;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: EProcessNodeEditDTO3_isShowRefuseButton;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent: EProcessNodeEditDTO3_isCustomBackContent;
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: EProcessNodeEditDTO3_isShowBackButton;
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
    /** 是否启用接受超时 */
    isEnabledAcceptTimeout?: EProcessNodeEditDTO3_isEnabledAcceptTimeout;
    /** 审批人来自, 默认是当前节点审批 */
    approverFrom?: EProcessNodeEditDTO3_approverFrom;
    /** 上一节点限制指定范围 */
    previousNodeAssignmentRange?: EProcessNodeEditDTO3_previousNodeAssignmentRange;
    /** 上一节点选项人员集合 */
    previousNodeUserOptions?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 是否启用转交 */
    enabledTransfer?: EProcessNodeEditDTO3_enabledTransfer;
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: EProcessNodeEditDTO3_transferScopeType;
    /** 转交人集 */
    transferUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 是否启用表单暂存 */
    enableFormStaging?: EProcessNodeEditDTO3_enableFormStaging;
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: EProcessNodeEditDTO3_isCustomBeginningContent;
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: EProcessNodeEditDTO3_isShowBeginningButton;
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: EProcessNodeEditDTO3_isEnabledBeginningTimeout;
}
/** 流程节点执行人编辑DTO */
export interface ITheProcessNodeExecutiveEditsTheDTO {
    /** id */
    executorId?: string;
    /** 执行人类型 */
    executorType?: ETheProcessNodeExecutiveEditsTheDTO_executorType;
    /** 执行人系统类型 */
    executorSysType?: ETheProcessNodeExecutiveEditsTheDTO_executorSysType;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
}
/** 流程节点表单操作权限编辑DTO */
export interface IProcessNodeFormOperationPermissionEditDTO {
    /** id */
    id?: string;
    /** 表单序号值(整数) - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 权限类型 */
    permissionsType: EProcessNodeFormOperationPermissionEditDTO_permissionsType;
    /** 表格内权限类型 */
    tableFormFieldPermissions: IProcessNodeFormOperationPermissionEditDTO[];
}
/** 流程节点条件分支组编辑DTO */
export interface IProcessNodeConditionBranchGroupEditDTO {
    /** id */
    id?: string;
    /** 条件集 */
    condis?: IEditDtosForProcessNodeConditions[];
}
/** 流程节点条件编辑DTO */
export interface IEditDtosForProcessNodeConditions {
    /** id */
    id?: string;
    /** 条件类型 */
    type?: EEditDtosForProcessNodeConditions_type;
    /** 默认条件-条件类型为系统内置时有值 */
    defaultCondi?: EEditDtosForProcessNodeConditions_defaultCondi;
    /** 表单字段id-条件类型为表单字段时有值 */
    flowPathFormFieldId?: string;
    /** 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 判断方式 */
    compareMode?: EEditDtosForProcessNodeConditions_compareMode;
    /** 判断目标来源 */
    compareTargetFromSource?: EEditDtosForProcessNodeConditions_compareTargetFromSource;
    /** 关联表单-比较目标字段ID */
    targetFieldId?: string;
    /** 关联表单-比较目标字段序列 */
    targetFieldSerialNo?: string;
    /** 关联表单-比较目标字段编码 */
    targetFieldCode?: string;
    /** 自定义-比较值 */
    compareValue?: string;
    /** 自定义-日期动态区间 */
    dateDynamicRange?: EEditDtosForProcessNodeConditions_dateDynamicRange;
    /** 选项值 */
    selectorValues?: string[];
    /** 前端Meta */
    frontendMeta?: string;
}
/** 流程节点编辑DTO_1 */
export interface IProcessNodeEditDTO1 {
    /** id */
    id?: string;
    /** 超时的步骤类型 */
    stepType?: EProcessNodeEditDTO1_stepType;
    /** 超时类型 */
    timeoutType?: EProcessNodeEditDTO1_timeoutType;
    /** 超时值 - 超时类型为自定义时有值 */
    timeoutTimeValue?: number;
    /** 超时值类型 - 超时类型为自定义时有值 */
    timeoutTimeType?: EProcessNodeEditDTO1_timeoutTimeType;
    /** 超时表单字段id */
    timeoutFlowPathFormFieldId?: string;
    /** 超时表单字段序列值 */
    timeoutFlowPathFormFieldSerialNo?: string;
    /** 预警处理方式 */
    earlyWarningHandleType?: EProcessNodeEditDTO1_earlyWarningHandleType;
    /** 预警超时前发送通知 超时值 */
    earlyWarningTimeValue?: number;
    /** 预警超时前发送通知 超时值类型 */
    earlyWarningTimeType?: EProcessNodeEditDTO1_earlyWarningTimeType;
    /** 预警提醒人集 */
    earlyWarningUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 预警提醒方式 */
    earlyWarningSendType?: EProcessNodeEditDTO1_earlyWarningSendType;
    /** 超时处理方式 */
    timeoutHandleType?: EProcessNodeEditDTO1_timeoutHandleType;
    /** 超时后通知类型 */
    timeoutAfterSendType?: EProcessNodeEditDTO1_timeoutAfterSendType;
    /** 超时提醒人集 */
    timeoutUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 超时通知方式 */
    timeoutSendType?: EProcessNodeEditDTO1_timeoutSendType;
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
}
/** 流程节点编辑DTO */
export interface ITheProcessNodeEditsTheDTO {
    /** id */
    id?: string;
    /** 消息触发时机 */
    triggerTiming?: ETheProcessNodeEditsTheDTO_triggerTiming;
    /** 消息配置ID列表 */
    messageConfigIdList?: string[];
    /** 是否启用消息通知 */
    isEnabledMessageNotification?: ETheProcessNodeEditsTheDTO_isEnabledMessageNotification;
    /** 引用的ID。比如超时配置 */
    refId?: string;
}
/** 流程表单权限编辑DTO */
export interface IProcessFormPermissionsEditDTO {
    /** 角色权限集 */
    rolePermissions?: IProcessRolePermissionDTO[];
    /** 表单控制 - 编辑权限列表 */
    editPermissionList?: IFlowPathEditPermissionEditDTO[];
    /** 表单控制 - 新增权限列表 */
    addPermissionList?: IFlowPathAddPermissionEditDTO[];
    /** 表单控制 - 查询权限列表 */
    queryPermissionList?: IFlowPathQueryPermissionEditDTO[];
    /** 表单控制 - 复制权限列表 */
    copyPermissionList?: IFlowPathCopyPermissionEditDTO[];
}
/** 流程角色权限DTO */
export interface IProcessRolePermissionDTO {
    /** 角色id */
    roleId?: string;
    /** 新增权限码集 */
    addPermissionCodes?: string[];
    /** 删除权限码集 */
    removePermissionCodes?: string[];
    /** 数据权限集 */
    dataAuthList?: IProcessRoleDataPermissionDTO[];
}
/** 流程角色数据权限DTO */
export interface IProcessRoleDataPermissionDTO {
    /** 数据权限类型 */
    dataAuthType?: EProcessRoleDataPermissionDTO_dataAuthType;
    /** 数据权限类型 */
    roleDataAuthFieldList?: IProcessRoleDataPermissionFieldDTO[];
}
/** 流程角色数据权限字段DTO */
export interface IProcessRoleDataPermissionFieldDTO {
    /** 流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 流程表单字段名 */
    flowPathFormFieldName?: string;
}
/** FlowPathEditPermissionEditDTO */
export interface IFlowPathEditPermissionEditDTO {
    /** 流程状态 */
    flowStatus?: EFlowPathEditPermissionEditDTO_flowStatus;
    /** 是否可编辑 */
    isEditable?: EFlowPathEditPermissionEditDTO_isEditable;
    /** 是否禁用 */
    isDisabled?: EFlowPathEditPermissionEditDTO_isDisabled;
}
/** FlowPathAddPermissionEditDTO */
export interface IFlowPathAddPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 权限类型 */
    type?: EFlowPathAddPermissionEditDTO_type;
}
/** FlowPathQueryPermissionEditDTO */
export interface IFlowPathQueryPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否可见 */
    isVisible?: EFlowPathQueryPermissionEditDTO_isVisible;
}
/** FlowPathCopyPermissionEditDTO */
export interface IFlowPathCopyPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否能够复制 */
    isCanCopy?: EFlowPathCopyPermissionEditDTO_isCanCopy;
}
/** 流程事件编辑DTO */
export interface IProcessEventEditDTO {
    /** 标题 */
    title?: string;
    /** 是否系统预设 */
    isSystemPreset?: EProcessEventEditDTO_isSystemPreset;
    /** 触发流程节点序号值列表 */
    triggerFlowPathNodeSerialNoList?: string[];
    /** 触发事件的时机- 即事件不是由流程提交触发，而是因为某个事件发生触发-例如当流程完成后触发该事件 */
    triggerEventTiming?: EProcessEventEditDTO_triggerEventTiming;
    /** 操作表单类型 */
    operateFormType?: EProcessEventEditDTO_operateFormType;
    /** 操作目标表单code */
    operateFormCode?: string;
    /** 操作方式 */
    operateType?: EProcessEventEditDTO_operateType;
    /** 触发条件生效设置 */
    validSetting?: IProcessEventSettingsEditDTO;
    /** 触发条件失效设置 */
    invalidSetting?: IProcessEventSettingsEditDTO;
    /** 是否触发流程 -- 针对新增数据事件而言 */
    isTriggerFlow?: EProcessEventEditDTO_isTriggerFlow;
    /** 套件类型-仅针对套件的事件有效 */
    kitType?: EProcessEventEditDTO_kitType;
}
/** 流程事件设置编辑DTO */
export interface IProcessEventSettingsEditDTO {
    /** 子表新增方式 -- 针对新增事件 */
    childFormInsertType?: EProcessEventSettingsEditDTO_childFormInsertType;
    /** 是否直接删除目标表单 -- 针对新增事件 */
    isDirectDeleteTargetForm?: EProcessEventSettingsEditDTO_isDirectDeleteTargetForm;
    /** 在指定的表格编码的维度上新增数据 -- 针对新增事件。如果为空，则维度以主表的维度来新增数据，不为空，则以指定明细表的维度来新增数据） */
    addDataInDimensionWhereTableCode?: string;
    /** 新增业务事件-明细分组 */
    detailGroup?: ITheBasisForInsertingTheServiceEventDetailDataGroup;
    /** 流程事件操作设置编辑集 */
    operateSettings?: IProcessEventOperationSettingsEditTheDTO[];
    /** 触发条件筛选组 */
    triggerConditionFilterGroups?: IEditTheDTOForTheProcessEventActionFilterGroup[];
    /** 流程事件操作筛选条件组集 */
    operateFilterGroups?: IEditTheDTOForTheProcessEventActionFilterGroup[];
    /** 流程事件子表设置集合 -- 针对新增事件 */
    insertEventChildFormSettings?: IApplyTheNewEventSubtableToSetTheRequestDTO[];
}
/** 插入业务事件-明细数据分组的依据 */
export interface ITheBasisForInsertingTheServiceEventDetailDataGroup {
    /** 是否对明细数据进行分组 */
    isGroup?: ETheBasisForInsertingTheServiceEventDetailDataGroup_isGroup;
    /** 分组依据-表格字段类型编码 */
    groupingTableCode?: string;
    /** 分组依据-表格字段类型的序列号 */
    groupingTableSerialNo?: string;
    /** 分组依据-分组字段序列号列表 */
    groupingFieldSerialNoList?: string[];
}
/** 流程事件操作设置编辑DTO */
export interface IProcessEventOperationSettingsEditTheDTO {
    /** 操作赋值字段序号值(目标.字段序列号）) */
    operateColumnSerialNo?: string;
    /** 值来源类型 */
    sourceType?: EProcessEventOperationSettingsEditTheDTO_sourceType;
    /** 表单字段序号值(源.一级字段序列号) */
    formFieldSerialNo?: string;
    /** 表单字段序号值(源.二级字段序列号) */
    secondarySourceFieldSerialNo?: string;
    /** 表单字段序号值(源.二级字段序编码) */
    secondarySourceFieldCode?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: IProcessFormFormulaFieldDTO[];
    /** 固定值 */
    fixedValue?: string;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: EProcessEventOperationSettingsEditTheDTO_isDisableEdit;
}
/** 流程事件操作筛选条件组编辑DTO */
export interface IEditTheDTOForTheProcessEventActionFilterGroup {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessEventActionFilterEditDTO[];
}
/** 流程事件操作筛选条件编辑DTO */
export interface IProcessEventActionFilterEditDTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EProcessEventActionFilterEditDTO_compareType;
    /** 判断对象类型 */
    compareObjType?: EProcessEventActionFilterEditDTO_compareObjType;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: EProcessEventActionFilterEditDTO_dateDynamicRange;
}
/** 应用新增事件子表设置请求DTO */
export interface IApplyTheNewEventSubtableToSetTheRequestDTO {
    /** 字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 字段序列号 */
    filterGroups?: IApplyTheNewEventSubtableConditionGroupToRequestTheDTO[];
}
/** 应用新增事件子表条件组请求DTO */
export interface IApplyTheNewEventSubtableConditionGroupToRequestTheDTO {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IApplyTheNewEventSubtableFilterToRequestADTO[];
}
/** 应用新增事件子表筛选条件请求DTO */
export interface IApplyTheNewEventSubtableFilterToRequestADTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EApplyTheNewEventSubtableFilterToRequestADTO_compareType;
    /** 判断对象类型 */
    compareObjType?: EApplyTheNewEventSubtableFilterToRequestADTO_compareObjType;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 自定义值回显 */
    compareCustomValueEcho?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: EApplyTheNewEventSubtableFilterToRequestADTO_dateDynamicRange;
}
/** 流程打印模板编辑DTO */
export interface IProcessPrintTemplateEditDTO {
    /** 流程打印模板id */
    id?: string;
    /** 模板名称 */
    name?: string;
    /** 模板结构代码 */
    templateStructure?: string;
    /** 打印类型 */
    printType?: EProcessPrintTemplateEditDTO_printType;
}
/** PublishEnterpriseRouterEditDTO */
export interface IPublishEnterpriseRouterEditDTO {
    /** 上级路由ID */
    parentRouteId?: string;
    /** 所属排序位置-前端给的值不代表真实的顺序，仅仅代表该应用在第几号位置, 排在第一个，则排序位置为1，排在第二个则排序位置为2，依次类推 */
    sortOffset?: number;
}
/** 代办配置 */
export interface IAgencyAllocation {
    /** 代办编辑服务 */
    id?: string;
    /** 标题配置 */
    title?: string;
    /** 字段序列号列表 */
    titleFieldSerialNoList?: string[];
    /** 内容字段序列号列表 */
    contentFieldSerialNoList?: string[];
}
/** FlowPathDetailPageConfigEditDTO */
export interface IFlowPathDetailPageConfigEditDTO {
    /** ID */
    id?: string;
    /** 引用当前表单的应用引擎编码 */
    refFlowPathCode?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** 分组列表 */
    filterGroupList?: IConditionGroup1[];
}
/** 条件组_1 */
export interface IConditionGroup1 {
    /** 过滤组的ID */
    id?: string;
    /** 分页配置ID */
    flowPathDetailPageConfigId?: string;
    /** 过滤列表 */
    filterList?: ISetOfConditions[];
}
/** 条件组 */
export interface ISetOfConditions {
    /** 过滤条件的ID */
    id?: string;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathDetailPageFilterGroupId?: string;
    /** 所属流程表单字段id */
    flowPathDetailPageConfigId?: string;
    /** 被判断的字段序列号 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: ESetOfConditions_compareType;
    /** 判断对象类型 */
    compareObjType?: ESetOfConditions_compareObjType;
    /** 判断对象字段code */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: ESetOfConditions_dateDynamicRange;
    /** 是否使用日期的显示格式来做为筛选条件 */
    isUseDateShowFormat?: ESetOfConditions_isUseDateShowFormat;
}
/** JSONResult«流程版本响应VO» */
export interface IJSONResultProcessVersionRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessVersionRespondsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程版本响应VO */
export interface ITheProcessVersionRespondsToVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 版本排名 */
    versionRank?: number;
    /** 是否是系统流程 */
    isSystem?: ETheProcessVersionRespondsToVO_isSystem;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 简介 */
    description?: string;
    /** 发布终端值合计 */
    publishTotal?: number;
    /** 是否是多流程 */
    isMultiFlow?: ETheProcessVersionRespondsToVO_isMultiFlow;
}

export enum EProcessEditingDTO_type {
    /** 单据 */
    BILL = "BILL",
    /** 基础数据 */
    DATA = "DATA",
    /** 多级基础数据 */
    TREE_DATA = "TREE_DATA",
    /** 页面 */
    PAGE = "PAGE"
}

export enum EProcessEditingDTO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_flowPathSystemType {
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE",
    /** 生产订单 */
    PRODUCE_ORDER = "PRODUCE_ORDER",
    /** 安灯 */
    ANDON = "ANDON",
    /** 员工 */
    EMPLOYEE = "EMPLOYEE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 区域 */
    AREA = "AREA",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料BOM */
    MATERIAL_BOM = "MATERIAL_BOM",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 职位 */
    POSITION = "POSITION",
    /** 银行 */
    BANK = "BANK",
    /** 单位 */
    UNIT = "UNIT",
    /** 物料库存 */
    WAREHOUSE_MATERIAL_RP = "WAREHOUSE_MATERIAL_RP",
    /** 模具 */
    MOLD = "MOLD",
    /** 调拨类型 */
    ALLOCATION_TYPE = "ALLOCATION_TYPE",
    /** 入库类型 */
    IN_STORAGE_TYPE = "IN_STORAGE_TYPE",
    /** 出库类型 */
    OUT_STORAGE_TYPE = "OUT_STORAGE_TYPE",
    /** 其他入库单 */
    OTHER_IN_STORAGE_ORDER = "OTHER_IN_STORAGE_ORDER",
    /** 其他出库单 */
    OTHER_OUT_STORAGE_ORDER = "OTHER_OUT_STORAGE_ORDER",
    /** 调拨单 */
    ALLOCATION_ORDER = "ALLOCATION_ORDER",
    /** 盘亏单 */
    INVENTORY_LOSSES_ORDER = "INVENTORY_LOSSES_ORDER",
    /** 盘盈单 */
    INVENTORY_PROFIT_ORDER = "INVENTORY_PROFIT_ORDER",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 设备类型 */
    DEVICE_TYPE = "DEVICE_TYPE",
    /** 备件 */
    DEVICE_PARTS = "DEVICE_PARTS",
    /** 设备人员能力 */
    DEVICE_EMPLOYEE_CAPACITY = "DEVICE_EMPLOYEE_CAPACITY",
    /** 设备保养方案 */
    DEVICE_MAINTAIN_SCHEME = "DEVICE_MAINTAIN_SCHEME",
    /** 设备保养计划 */
    DEVICE_MAINTAIN_PLAN = "DEVICE_MAINTAIN_PLAN",
    /** 设备保养任务 */
    DEVICE_MAINTAIN_TASK = "DEVICE_MAINTAIN_TASK",
    /** 产线 */
    PRODUCTION_LINE = "PRODUCTION_LINE",
    /** 销售计划 */
    SALES_PLAN = "SALES_PLAN",
    /** 报价单 */
    QUOTE_BILL = "QUOTE_BILL",
    /** 跟进记录 */
    FOLLOW_RECORD = "FOLLOW_RECORD",
    /** 跟进计划 */
    FOLLOW_PLAN = "FOLLOW_PLAN",
    /** 工作日报 */
    DAILY_WORK = "DAILY_WORK",
    /** 合同管理 */
    CONTRACT = "CONTRACT",
    /** 商机 */
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    /** 客户转移 */
    CUSTOMER_TRANSFER = "CUSTOMER_TRANSFER",
    /** 回款单 */
    RECEIPT = "RECEIPT",
    /** 员工 */
    USER = "USER",
    /** 改善类别 */
    IMPROVEMENT_CATEGORY = "IMPROVEMENT_CATEGORY",
    /** 合理化建议 */
    PROPOSAL = "PROPOSAL",
    /** Kaizen项目任务 */
    KAIZEN_PROJECT_TASK = "KAIZEN_PROJECT_TASK",
    /** Kaizen项目 */
    KAIZEN_PROJECT = "KAIZEN_PROJECT",
    /** 合理化建议评分 */
    PROPOSAL_SCORE = "PROPOSAL_SCORE",
    /** 部门年目标设置 */
    DEPARTMENT_YEAR_TARGET_SETTING = "DEPARTMENT_YEAR_TARGET_SETTING",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 采购订单 */
    PURCHASE_ORDER = "PURCHASE_ORDER",
    /** 收付款账户 */
    PAYMENT_ACCOUNT = "PAYMENT_ACCOUNT",
    /** 采购入库单 */
    PURCHASE_IN_ORDER = "PURCHASE_IN_ORDER",
    /** 采购退货单 */
    PURCHASE_RETURN_ORDER = "PURCHASE_RETURN_ORDER",
    /** 付款单 */
    PAYMENT_ORDER = "PAYMENT_ORDER",
    /** 付款退款单 */
    PAYMENT_RETURN_ORDER = "PAYMENT_RETURN_ORDER",
    /** 预付款单 */
    PREPAID_ORDER = "PREPAID_ORDER",
    /** 销售订单 */
    SALES_ORDER = "SALES_ORDER",
    /** 销售出库单 */
    SALES_OUT_STORAGE_ORDER = "SALES_OUT_STORAGE_ORDER",
    /** 销售退货单 */
    SALES_RETURN_ORDER = "SALES_RETURN_ORDER",
    /** 收款单 */
    RECEIVABLE_ORDER = "RECEIVABLE_ORDER",
    /** 收款退款单 */
    RECEIVABLE_RETURN_ORDER = "RECEIVABLE_RETURN_ORDER",
    /** 预收款单 */
    PRE_RECEIVABLE_ORDER = "PRE_RECEIVABLE_ORDER",
    /** 生产领料单 */
    PRODUCTION_MATERIAL_ISSUANCE_ORDER = "PRODUCTION_MATERIAL_ISSUANCE_ORDER",
    /** 生产退料单 */
    PRODUCTION_MATERIAL_RETURN_ORDER = "PRODUCTION_MATERIAL_RETURN_ORDER",
    /** 生产入库单 */
    PRODUCTION_STOCK_IN_ORDER = "PRODUCTION_STOCK_IN_ORDER",
    /** 生产退库单 */
    PRODUCTION_STOCK_RETURN_ORDER = "PRODUCTION_STOCK_RETURN_ORDER",
    /** 费用类型 */
    PRODUCE_FEE_TYPE = "PRODUCE_FEE_TYPE",
    /** 费用归集 */
    PRODUCE_FEE_COLLECT = "PRODUCE_FEE_COLLECT",
    /** 项目 */
    PROJECT = "PROJECT",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目风险类型 */
    PROJECT_RISK_TYPE = "PROJECT_RISK_TYPE",
    /** 项目风险标识 */
    PROJECT_RISK_FLAG = "PROJECT_RISK_FLAG",
    /** 项目计划 */
    PROJECT_PLAN = "PROJECT_PLAN",
    /** 项目阶段 */
    PROJECT_STAGE = "PROJECT_STAGE",
    /** 项目任务 */
    PROJECT_TASK = "PROJECT_TASK",
    /** 评审任务 */
    PROJECT_TASK_REVIEW = "PROJECT_TASK_REVIEW",
    /** 决策任务 */
    PROJECT_TASK_DECISION = "PROJECT_TASK_DECISION",
    /** 项目任务类型 */
    PROJECT_TASK_TYPE = "PROJECT_TASK_TYPE",
    /** 项目成员 */
    PROJECT_MEMBER = "PROJECT_MEMBER",
    /** 项目角色 */
    PROJECT_ROLE = "PROJECT_ROLE",
    /** 项目风险 */
    PROJECT_RISK = "PROJECT_RISK",
    /** 项目费用 */
    PROJECT_FEE = "PROJECT_FEE",
    /** 质量问题 */
    PROJECT_QUALITY_ISSUE = "PROJECT_QUALITY_ISSUE",
    /** 质量目标 */
    PROJECT_QUALITY_TARGET = "PROJECT_QUALITY_TARGET",
    /** 项目会议纪要 */
    PROJECT_MEETING_SUMMARY = "PROJECT_MEETING_SUMMARY",
    /** 行动项 */
    PROJECT_ACTION_ITEM = "PROJECT_ACTION_ITEM",
    /** 领导批示 */
    PROJECT_LEADER_INSTRUCT = "PROJECT_LEADER_INSTRUCT",
    /** 项目大事记 */
    PROJECT_MEMORABILIA = "PROJECT_MEMORABILIA",
    /** 项目简报 */
    PROJECT_BRIEF_REPORT = "PROJECT_BRIEF_REPORT",
    /** 项目信息变更单 */
    PROJECT_MODIFICATION = "PROJECT_MODIFICATION",
    /** 项目计划变更单 */
    PROJECT_PLAN_MODIFICATION = "PROJECT_PLAN_MODIFICATION",
    /** 项目成员变更单 */
    PROJECT_MEMBER_MODIFICATION = "PROJECT_MEMBER_MODIFICATION",
    /** 年度质量目标 */
    QMS_ANNUAL_QUALITY_TARGET = "QMS_ANNUAL_QUALITY_TARGET",
    /** 质量工作计划 */
    QMS_QUALITY_WORK_PLAN = "QMS_QUALITY_WORK_PLAN",
    /** 未完成情况分析报告 */
    QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT = "QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT",
    /** 内部审核实施计划 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 内部审核检查记录 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 内部审核不符合项报告 */
    QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 内部审核建议项清单 */
    QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS",
    /** 内部审核报告 */
    QMS_INTERNAL_AUDIT_REPORT = "QMS_INTERNAL_AUDIT_REPORT",
    /** 内部审核不符合项纠正措施 */
    QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 目标项 */
    QMS_TARGET_ITEM = "QMS_TARGET_ITEM",
    /** 条款号及检查内容 */
    QMS_REGULATION_NO_AND_CONTENT = "QMS_REGULATION_NO_AND_CONTENT",
    /** 外部审核实施计划 */
    QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 外部审核不符合项报告 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 外部审核建议项清单 */
    QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS",
    /** 外部审核不符合项纠正措施 */
    QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 外部审核报告 */
    QMS_EXTERNAL_AUDIT_REPORT = "QMS_EXTERNAL_AUDIT_REPORT",
    /** 专项审核实施计划 */
    QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 专项审核检查记录 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 专项审核不符合项报告 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 专项审核不符合项纠正措施 */
    QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 专项审核建议项清单 */
    QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS = "QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS",
    /** 专项审核报告 */
    QMS_SPECIAL_AUDIT_REPORT = "QMS_SPECIAL_AUDIT_REPORT",
    /** 管理评审计划 */
    QMS_MANAGEMENT_REVIEW_PLAN = "QMS_MANAGEMENT_REVIEW_PLAN",
    /** 管理评审输入材料 */
    QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL = "QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL",
    /** 管理评审报告 */
    QMS_MANAGEMENT_REVIEW_REPORT = "QMS_MANAGEMENT_REVIEW_REPORT",
    /** 物料检验类别 */
    QMS_INSPECTION_CATEGORY = "QMS_INSPECTION_CATEGORY",
    /** 检验方法 */
    QMS_INSPECTION_METHOD = "QMS_INSPECTION_METHOD",
    /** 抽样标准 */
    QMS_SAMPLING_STANDARDS = "QMS_SAMPLING_STANDARDS",
    /** 检验项 */
    QMS_INSPECTION_ITEMS = "QMS_INSPECTION_ITEMS",
    /** 检验方案 */
    QMS_INSPECTION_SCHEME = "QMS_INSPECTION_SCHEME",
    /** 来料报检单 */
    QMS_INCOMING_INSPECTION_APPLY_FORM = "QMS_INCOMING_INSPECTION_APPLY_FORM",
    /** 来料检验任务 */
    QMS_INCOMING_INSPECTION_TASK = "QMS_INCOMING_INSPECTION_TASK",
    /** 来料检验报告 */
    QMS_INCOMING_INSPECTION_REPORT = "QMS_INCOMING_INSPECTION_REPORT",
    /** 首检报检单 */
    QMS_FIRST_INSPECTION_APPLY_FORM = "QMS_FIRST_INSPECTION_APPLY_FORM",
    /** 首检检验任务 */
    QMS_FIRST_INSPECTION_TASK = "QMS_FIRST_INSPECTION_TASK",
    /** 首检检验报告 */
    QMS_FIRST_INSPECTION_REPORT = "QMS_FIRST_INSPECTION_REPORT",
    /** 工序报检单 */
    QMS_PROCESS_INSPECTION_APPLY_FORM = "QMS_PROCESS_INSPECTION_APPLY_FORM",
    /** 工序检验任务 */
    QMS_PROCESS_INSPECTION_TASK = "QMS_PROCESS_INSPECTION_TASK",
    /** 工序检验报告 */
    QMS_PROCESS_INSPECTION_REPORT = "QMS_PROCESS_INSPECTION_REPORT",
    /** 成品报检单 */
    QMS_PRODUCT_INSPECTION_APPLY_FORM = "QMS_PRODUCT_INSPECTION_APPLY_FORM",
    /** 成品检验任务 */
    QMS_PRODUCT_INSPECTION_TASK = "QMS_PRODUCT_INSPECTION_TASK",
    /** 成品检验报告 */
    QMS_PRODUCT_INSPECTION_REPORT = "QMS_PRODUCT_INSPECTION_REPORT",
    /** 出货报检单 */
    QMS_SHIPMENT_INSPECTION_APPLY_FORM = "QMS_SHIPMENT_INSPECTION_APPLY_FORM",
    /** 出货检验任务 */
    QMS_SHIPMENT_INSPECTION_TASK = "QMS_SHIPMENT_INSPECTION_TASK",
    /** 出货检验报告 */
    QMS_SHIPMENT_INSPECTION_REPORT = "QMS_SHIPMENT_INSPECTION_REPORT",
    /** 质量人员 */
    QMS_QUALITY_PERSONNEL = "QMS_QUALITY_PERSONNEL",
    /** 不合格原因 */
    QMS_REASON_OF_NON_CONFORMANCE = "QMS_REASON_OF_NON_CONFORMANCE",
    /** 不合格品处理方式 */
    QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT = "QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT",
    /** 来料不合格品处理 */
    QMS_HANDLING_OF_INCOMING_NON_CONFORMING = "QMS_HANDLING_OF_INCOMING_NON_CONFORMING",
    /** 出货不合格品处理 */
    QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING = "QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING",
    /** 成品不合格品处理 */
    QMS_HANDLE_PRODUCT_NON_CONFORMING = "QMS_HANDLE_PRODUCT_NON_CONFORMING",
    /** 质量问题信息报告单 */
    QMS_QUALITY_ISSUE_INFORMATION_REPORT = "QMS_QUALITY_ISSUE_INFORMATION_REPORT",
    /** 质量问题分析报告单 */
    QMS_QUALITY_PROBLEM_ANALYSIS_REPORT = "QMS_QUALITY_PROBLEM_ANALYSIS_REPORT",
    /** 质量问题纠正措施实施报告单 */
    QMS_QUALITY_CORRECTIVE_ACTION_REPORT = "QMS_QUALITY_CORRECTIVE_ACTION_REPORT",
    /** 8D报告单 */
    QMS_8D_REPORT = "QMS_8D_REPORT",
    /** 技术归零报告单 */
    QMS_TECHNICAL_ZEROING_REPORT = "QMS_TECHNICAL_ZEROING_REPORT",
    /** 管理归零报告单 */
    QMS_MANAGE_ZEROING_REPORT = "QMS_MANAGE_ZEROING_REPORT",
    /** FRACAS报告单 */
    QMS_FRACAS_REPORT = "QMS_FRACAS_REPORT",
    /** 改进项目 */
    QMS_IMPROVEMENT_PROJECT = "QMS_IMPROVEMENT_PROJECT",
    /** 首检不合格品处理 */
    QMS_HANDLE_FIRST_INSPECT_DEFECTS = "QMS_HANDLE_FIRST_INSPECT_DEFECTS",
    /** 工序检不合格品处理 */
    QMS_HANDLE_PROCESS_INSPECT_DEFECTS = "QMS_HANDLE_PROCESS_INSPECT_DEFECTS",
    /** 巡检不合格品处理 */
    QMS_HANDLE_PATROL_INSPECT_DEFECTS = "QMS_HANDLE_PATROL_INSPECT_DEFECTS",
    /** 质量先进集体申报 */
    QMS_ADVANCE_TEAM_DECLARE = "QMS_ADVANCE_TEAM_DECLARE",
    /** 质量先进个人申报 */
    QMS_ADVANCE_PERSONNEL_DECLARE = "QMS_ADVANCE_PERSONNEL_DECLARE",
    /** 质量月报填报 */
    QMS_QUALITY_MONTH_REPORT_FILL = "QMS_QUALITY_MONTH_REPORT_FILL",
    /** 印章式样 */
    QMS_SEAL_STYLE = "QMS_SEAL_STYLE",
    /** 印章领用申请 */
    QMS_SEAL_APPLY_FOR_RECEIVING = "QMS_SEAL_APPLY_FOR_RECEIVING",
    /** 印章挂失申请 */
    QMS_SEAL_APPLY_FOR_REPORT_LOSS = "QMS_SEAL_APPLY_FOR_REPORT_LOSS",
    /** 印章台账 */
    QMS_SEAL_LEDGER = "QMS_SEAL_LEDGER",
    /** 印章销号申请 */
    QMS_SEAL_APPLY_FOR_CANCELLATION = "QMS_SEAL_APPLY_FOR_CANCELLATION",
    /** 印章更换申请 */
    QMS_SEAL_APPLY_FOR_REPLACEMENT = "QMS_SEAL_APPLY_FOR_REPLACEMENT",
    /** 巡检计划 */
    QMS_PATROL_INSPECTION_PLAN = "QMS_PATROL_INSPECTION_PLAN",
    /** 巡检任务 */
    QMS_PATROL_INSPECTION_TASK = "QMS_PATROL_INSPECTION_TASK",
    /** 巡检报告 */
    QMS_PATROL_INSPECTION_REPORT = "QMS_PATROL_INSPECTION_REPORT",
    /** 文件分类 */
    FILE_CATEGORY = "FILE_CATEGORY",
    /** 文件对象 */
    FILE_OBJECT = "FILE_OBJECT"
}

export enum EProcessEditingDTO_isTree {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_flowPathResultNotify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_recommitNotify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_invalidNotify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_deleteNotify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEditingDTO_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EProcessEditingDTO_isInitAppServicePack {
    Y = "Y",
    N = "N"
}

export enum EProcessFormFieldEditDTO_typeGroup {
    /** 表单 */
    FORM = "FORM",
    /** 样式 */
    STYLE = "STYLE"
}

export enum EProcessFormFieldEditDTO_type {
    /** 单行文字 */
    INPUT_TEXT = "INPUT_TEXT",
    /** 多行文字 */
    TEXTAREA = "TEXTAREA",
    /** 数字 */
    NUMBER = "NUMBER",
    /** 日期 */
    DATE = "DATE",
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX",
    /** 图片上传 */
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    /** 附件上传 */
    FILE_UPLOAD = "FILE_UPLOAD",
    /** 表格 */
    TABLE = "TABLE",
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 关联表单多选 */
    FORM_RP_MULTI = "FORM_RP_MULTI",
    /** 流水号 */
    CODE = "CODE",
    /** 地址 */
    ADDRESS = "ADDRESS",
    /** 定位 */
    POSITION = "POSITION",
    /** 电子邮箱 */
    EMAIL = "EMAIL",
    /** 手机号码 */
    MOBILE = "MOBILE",
    /** 身份证号码 */
    ID_CARD = "ID_CARD",
    /** 富文本 */
    RICH_TEXT = "RICH_TEXT",
    /** 关联查询 */
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    /** 说明文字 */
    DESC_TEXT = "DESC_TEXT",
    /** 分隔符 */
    SPLIT_LINE = "SPLIT_LINE",
    /** 批次号 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 自定义公式 */
    FORMULA = "FORMULA"
}

export enum EProcessFormFieldEditDTO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isSystemPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isSystemMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isTableShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isKit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_kitType {
    /** 入库套件 */
    STORAGE_IN = "STORAGE_IN",
    /** 出库套件 */
    STORAGE_OUT = "STORAGE_OUT",
    /** 出库库存套件 */
    STORAGE_OUT_STORAGE = "STORAGE_OUT_STORAGE",
    /** 调拨套件 */
    STORAGE_MOVE = "STORAGE_MOVE",
    /** 调拨库存套件 */
    STORAGE_MOVE_STORAGE = "STORAGE_MOVE_STORAGE",
    /** 收款套件 */
    RECEIVED = "RECEIVED",
    /** 应收套件 */
    RECEIVABLE = "RECEIVABLE",
    /** 应收收款套件 */
    RECEIVABLE_COLLECTION = "RECEIVABLE_COLLECTION",
    /** 付款套件 */
    PAID = "PAID",
    /** 应付套件 */
    PAYABLE = "PAYABLE",
    /** 应付付款套件 */
    PAYABLE_PAYMENT = "PAYABLE_PAYMENT",
    /** 单据日期 */
    BILL_DATE = "BILL_DATE"
}

export enum EProcessFormFieldEditDTO_kitColumnType {
    /** 物料编码 */
    MATERIAL_CODE = "MATERIAL_CODE",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料名称 */
    MATERIAL_NAME = "MATERIAL_NAME",
    /** 库存 */
    WAREHOUSE_MATERIAL_RP_ID = "WAREHOUSE_MATERIAL_RP_ID",
    /** 入库仓位 */
    IN_STOREHOUSE = "IN_STOREHOUSE",
    /** 出库仓位 */
    OUT_STOREHOUSE = "OUT_STOREHOUSE",
    /** 出入库数量 */
    IN_OUT_QUANTITY = "IN_OUT_QUANTITY",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 业务员 */
    BUSINESS_USER = "BUSINESS_USER",
    /** 收款金额 */
    RECEIVED_AMOUNT = "RECEIVED_AMOUNT",
    /** 应收金额 */
    RECEIVABLE_AMOUNT = "RECEIVABLE_AMOUNT",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 付款金额 */
    PAID_AMOUNT = "PAID_AMOUNT",
    /** 应付金额 */
    PAYABLE_AMOUNT = "PAYABLE_AMOUNT",
    /** 计量单位 */
    UNIT = "UNIT",
    /** 入库仓库 */
    IN_STORE = "IN_STORE",
    /** 入库仓库 */
    OUT_STORE = "OUT_STORE",
    /** 可用库存 */
    USABLE_QUANTITY = "USABLE_QUANTITY",
    /** 批次 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO"
}

export enum EProcessFormFieldEditDTO_tableType {
    /** 默认类型 */
    DEFAULT = "DEFAULT"
}

export enum EProcessFormFieldEditDTO_selectorType {
    /** 平铺 */
    FLAT = "FLAT",
    /** 下拉 */
    PULL_DOWN = "PULL_DOWN"
}

export enum EProcessFormFieldEditDTO_defaultType {
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 数据联动 */
    DATA_LINKAGE = "DATA_LINKAGE"
}

export enum EProcessFormFieldEditDTO_defaultDateType {
    /** 未配置 */
    NONE = "NONE",
    /** 系统时间 */
    SYSTEM = "SYSTEM",
    /** 固定时间 */
    FIX = "FIX"
}

export enum EProcessFormFieldEditDTO_isMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isScan {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_numberType {
    /** 整数 */
    INTEGER = "INTEGER",
    /** 小数 */
    DECIMAL = "DECIMAL"
}

export enum EProcessFormFieldEditDTO_canNegative {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_numberFormat {
    /** % */
    F1 = "F1",
    /** ￥ */
    F2 = "F2",
    /** $ */
    F3 = "F3",
    /** 金额大写 */
    F4 = "F4"
}

export enum EProcessFormFieldEditDTO_dateType {
    /** 年-月-日 */
    DAY = "DAY",
    /** 年-月-日 时:分 */
    MIN = "MIN",
    /** 年-月-日 时:分:秒 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年-月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EProcessFormFieldEditDTO_selectorOptionSource {
    /** 默认填充 */
    DEFAULT_FILL = "DEFAULT_FILL",
    /** 系统字典 */
    SYSTEM_DICTIONARY = "SYSTEM_DICTIONARY"
}

export enum EProcessFormFieldEditDTO_selectorOptionSourceBusinessCode {
    /** 物料种类 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 部门组织分类 */
    DEPARTMENT_ORG_CATEGORY = "DEPARTMENT_ORG_CATEGORY",
    /** 部门组织类型 */
    DEPARTMENT_ORG_TYPE = "DEPARTMENT_ORG_TYPE",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目大类 */
    PROJECT_CATEGORY = "PROJECT_CATEGORY",
    /** 项目任务优先级 */
    PROJECT_TASK_PRIORITY = "PROJECT_TASK_PRIORITY",
    /** 项目行动项类型 */
    PROJECT_ACTION_ITEM_TYPE = "PROJECT_ACTION_ITEM_TYPE",
    /** 项目反馈周期 */
    PROJECT_FEEDBACK_CYCLE = "PROJECT_FEEDBACK_CYCLE",
    /** 项目会议类型 */
    PROJECT_MEETING_TYPE = "PROJECT_MEETING_TYPE",
    /** 项目密级类型 */
    PROJECT_SECRET_TYPE = "PROJECT_SECRET_TYPE",
    /** 监视频率 */
    QMS_ANNUAL_QUALITY_MONITOR_RATE = "QMS_ANNUAL_QUALITY_MONITOR_RATE",
    /** 定性目标值 */
    QMS_QUALITATIVE_TARGET_VALUE = "QMS_QUALITATIVE_TARGET_VALUE",
    /** 质量工作计划完成情况 */
    QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS = "QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS",
    /** 内部审核检查记录结果 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT",
    /** 内部审核不符合项程度 */
    QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE = "QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE",
    /** 验证结果 */
    QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT = "QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT",
    /** 内部审核实施计划成员分工类型 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE",
    /** 外部审核不符合项报告不符合程度 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 专项审核检查记录检查结果 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT",
    /** 专项审核不符合项报告不符合程度 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 国标文件 */
    QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS = "QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS",
    /** 质量人员授权检验职务 */
    QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES = "QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES",
    /** 质量人员工作形式 */
    QMS_QUALITY_PERSONNEL_WORKING_FORM = "QMS_QUALITY_PERSONNEL_WORKING_FORM",
    /** 质量人员分组 */
    QMS_QUALITY_PERSONNEL_GROUP = "QMS_QUALITY_PERSONNEL_GROUP",
    /** 质量人员证书名称 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME = "QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME",
    /** 质量人员状态 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS = "QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS",
    /** 领用所需资质 */
    QMS_SEAL_STYLE_QUALIFICATION = "QMS_SEAL_STYLE_QUALIFICATION",
    /** 印章状态 */
    QMS_SEAL_STATUS = "QMS_SEAL_STATUS",
    /** 所属分类 */
    QMS_ANNUAL_QUALITY_TARGET_CATEGORY = "QMS_ANNUAL_QUALITY_TARGET_CATEGORY",
    /** AQL */
    QMS_SAMPLING_STANDARDS_AQL = "QMS_SAMPLING_STANDARDS_AQL",
    /** 样本量字码 */
    QMS_SAMPLING_STANDARDS_CHARACTER_CODE = "QMS_SAMPLING_STANDARDS_CHARACTER_CODE",
    /** 抽样水平 */
    QMS_SAMPLING_STANDARDS_LEVEL = "QMS_SAMPLING_STANDARDS_LEVEL",
    /** 来料类型 */
    QMS_INSPECTION_INCOMING_TYPE = "QMS_INSPECTION_INCOMING_TYPE",
    /** 评审结果 */
    QMS_PROJECT_TASK_REVIEW_RESULT = "QMS_PROJECT_TASK_REVIEW_RESULT",
    /** 决策结果 */
    QMS_PROJECT_TASK_DECISION_RESULT = "QMS_PROJECT_TASK_DECISION_RESULT",
    /** 检验任务业务类型 */
    QMS_INSPECTION_BUSINESS_TYPE = "QMS_INSPECTION_BUSINESS_TYPE",
    /** 维修能力 */
    DEVICE_EMPLOYEE_MAINTAIN_LEVEL = "DEVICE_EMPLOYEE_MAINTAIN_LEVEL"
}

export enum EProcessFormFieldEditDTO_isCanModifySelectorOption {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_style {
    /** 高级 */
    ADVANCED = "ADVANCED",
    /** 级联 */
    CASCADE = "CASCADE"
}

export enum EProcessFormFieldEditDTO_organizationType {
    /** 非组织 */
    NONE = "NONE",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 人员 */
    USER = "USER",
    /** 处理人 */
    PROCESSOR = "PROCESSOR"
}

export enum EProcessFormFieldEditDTO_isAutoGetLocation {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_addressType {
    /** 省-市-区-详细地址 */
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    /** 省-市-区 */
    REGION = "REGION",
    /** 省-市-区-街道-详细地址 */
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    /** 省-市-区-街道 */
    STREET = "STREET"
}

export enum EProcessFormFieldEditDTO_unableRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_unableRepeatInTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isUseEmployeesWithAccounts {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_associationQueryShowStyle {
    /** 单行 */
    SINGLE = "SINGLE",
    /** 表格 */
    TABLE = "TABLE"
}

export enum EProcessFormFieldEditDTO_isHyperlinkEnabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEditDTO_isInsideTableBatchSelect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFormulaFieldDTO_type {
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 流程表单字段 */
    FORM_FIELD = "FORM_FIELD"
}

export enum EProcessFormFormulaFieldDTO_funType {
    /** 无函数 */
    DEFAULT = "DEFAULT",
    /** 求和 */
    SUM = "SUM",
    /** 最大值 */
    MAX = "MAX",
    /** 最小值 */
    MIN = "MIN",
    /** 平均值 */
    AVG = "AVG",
    /** 合并 */
    CONCAT = "CONCAT"
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_type {
    /** 固定值 */
    FIXED = "FIXED",
    /** 日期 */
    DATE = "DATE",
    /** 自动计数 */
    AUTO_NUMBER = "AUTO_NUMBER",
    /** 引用字段 */
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    /** ID的36进制 */
    ID36 = "ID36"
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_dateFormat {
    /** 年 */
    YEAR = "YEAR",
    /** 年月 */
    YEAR_MONTH = "YEAR_MONTH",
    /** 年月日 */
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 月日 */
    MONTH_DAY = "MONTH_DAY",
    /** 日 */
    DAY = "DAY"
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_isCodeAccording {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFilterGroupEditDTO_isSystemDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFilterEditDTO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EProcessFormAssociatedFormFilterEditDTO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EProcessFormAssociatedFormFilterEditDTO_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EProcessFormAssociatedFormFilterEditDTO_isUseDateShowFormat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFilterEditDTO_isDisableEdit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillEditDTO_fillWay {
    /** 直接填充 */
    NONE = "NONE",
    /** 最新 */
    LAST = "LAST",
    /** 合并 */
    CONCAT = "CONCAT",
    /** 合计 */
    SUM = "SUM"
}

export enum EProcessFormAssociatedFormFillEditDTO_isDisableEdited {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillEditDTO_isAllowModificationOfFillContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition {
    /** 等于 */
    EQ = "EQ",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType {
    /** 无限制 */
    NO_LIMIT = "NO_LIMIT",
    /** 固定值 */
    FIXED_VALUE = "FIXED_VALUE",
    /** 计算公式 */
    FORMULA = "FORMULA"
}

export enum EProcessNodeEditDTO3_type {
    /** 执行节点 */
    EXECUTE = "EXECUTE",
    /** 审批节点 */
    APPROVAL = "APPROVAL",
    /** 分支节点 */
    BRANCHES = "BRANCHES",
    /** 子分支节点 */
    CHILD = "CHILD"
}

export enum EProcessNodeEditDTO3_approvalType {
    /** 一位负责人通过或者拒绝即可 */
    ONE = "ONE",
    /** 需所有负责人通过，任意一位拒绝将无法通过 */
    ALL = "ALL"
}

export enum EProcessNodeEditDTO3_isBack {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_backType {
    /** 之前所有节点 */
    ANY = "ANY",
    /** 返回上一节点 */
    PREVIOUS = "PREVIOUS",
    /** 返回指定节点 */
    APPOINT = "APPOINT"
}

export enum EProcessNodeEditDTO3_isCustomSubmitContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_enabledTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_launchType {
    /** 手动 */
    MANUAL_OPERATION = "MANUAL_OPERATION",
    /** 自动 */
    AUTOMATIC = "AUTOMATIC"
}

export enum EProcessNodeEditDTO3_executeType {
    /** 只需一位执行人提交流程 */
    ONE = "ONE",
    /** 需所有执行人提交流程 */
    ALL = "ALL"
}

export enum EProcessNodeEditDTO3_isCustomAcceptContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isShowAcceptButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isCustomPassApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isCustomRefuseApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isShowRefuseButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isCustomBackContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isShowBackButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isEnabledAcceptTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_approverFrom {
    /** 当前节点指定 */
    CURRENT_NODE_ASSIGNMENT = "CURRENT_NODE_ASSIGNMENT",
    /** 上一个节点指定 */
    PREVIOUS_NODE_ASSIGNMENT = "PREVIOUS_NODE_ASSIGNMENT"
}

export enum EProcessNodeEditDTO3_previousNodeAssignmentRange {
    /** 不限制 */
    NO_LIMIT = "NO_LIMIT",
    /** 指定限制 */
    LIMIT = "LIMIT"
}

export enum EProcessNodeEditDTO3_enabledTransfer {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_transferScopeType {
    /** 指定范围 */
    CLASSIFIED = "CLASSIFIED",
    /** 不限范围 */
    ALL = "ALL"
}

export enum EProcessNodeEditDTO3_enableFormStaging {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isCustomBeginningContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isShowBeginningButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeEditDTO3_isEnabledBeginningTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessNodeExecutiveEditsTheDTO_executorType {
    /** 员工 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 系统控件 */
    SYS_CONTROL = "SYS_CONTROL"
}

export enum ETheProcessNodeExecutiveEditsTheDTO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}

export enum EProcessNodeFormOperationPermissionEditDTO_permissionsType {
    /** 可编辑 */
    EDIT = "EDIT",
    /** 只读 */
    READONLY = "READONLY",
    /** 隐藏 */
    HIDDEN = "HIDDEN"
}

export enum EEditDtosForProcessNodeConditions_type {
    /** 系统内置 */
    DEFAULT = "DEFAULT",
    /** 表单选项 */
    FORM_FIELD = "FORM_FIELD"
}

export enum EEditDtosForProcessNodeConditions_defaultCondi {
    /** 处理人 */
    HANDLE_USER = "HANDLE_USER"
}

export enum EEditDtosForProcessNodeConditions_compareMode {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EEditDtosForProcessNodeConditions_compareTargetFromSource {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EEditDtosForProcessNodeConditions_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EProcessNodeEditDTO1_stepType {
    /** 提交 */
    COMMITTED = "COMMITTED",
    /** 接受 */
    ACCEPT = "ACCEPT",
    /** 开始 */
    BEGINNING = "BEGINNING"
}

export enum EProcessNodeEditDTO1_timeoutType {
    /** 自定义 */
    CUSTOM = "CUSTOM",
    /** 来自流程表单 */
    FORM_FIELD = "FORM_FIELD"
}

export enum EProcessNodeEditDTO1_timeoutTimeType {
    /** 天 */
    DAY = "DAY",
    /** 小时 */
    HOUR = "HOUR",
    /** 分钟 */
    MINUTE = "MINUTE"
}

export enum EProcessNodeEditDTO1_earlyWarningHandleType {
    /** 不做任何处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 提前发送预警通知 */
    SEND = "SEND"
}

export enum EProcessNodeEditDTO1_earlyWarningTimeType {
    /** 天 */
    DAY = "DAY",
    /** 小时 */
    HOUR = "HOUR",
    /** 分钟 */
    MINUTE = "MINUTE"
}

export enum EProcessNodeEditDTO1_earlyWarningSendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum EProcessNodeEditDTO1_timeoutHandleType {
    /** 不做任何处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 自动提交 */
    AUTO = "AUTO"
}

export enum EProcessNodeEditDTO1_timeoutAfterSendType {
    /** 不做任何处理 */
    NOT_SEND = "NOT_SEND",
    /** 自动通知 */
    AUTO = "AUTO"
}

export enum EProcessNodeEditDTO1_timeoutSendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum ETheProcessNodeEditsTheDTO_triggerTiming {
    /** 处理人提交后 */
    APPROVER_COMMIT_AFTER = "APPROVER_COMMIT_AFTER",
    /** 处理节点完成后 */
    PROCESS_NODE_COMPLETED = "PROCESS_NODE_COMPLETED",
    /** 提交超时前 */
    COMMIT_TIMEOUT_BEFORE = "COMMIT_TIMEOUT_BEFORE",
    /** 提交超时后 */
    COMMIT_TIMEOUT_AFTER = "COMMIT_TIMEOUT_AFTER",
    /** 接受后 */
    ACCEPTANCE_AFTER = "ACCEPTANCE_AFTER",
    /** 接受超时前 */
    ACCEPTANCE_TIMEOUT_BEFORE = "ACCEPTANCE_TIMEOUT_BEFORE",
    /** 接受超时后 */
    ACCEPTANCE_TIMEOUT_AFTER = "ACCEPTANCE_TIMEOUT_AFTER",
    /** 开始后 */
    BEGINNING_AFTER = "BEGINNING_AFTER",
    /** 开始超时前 */
    BEGINNING_TIMEOUT_BEFORE = "BEGINNING_TIMEOUT_BEFORE",
    /** 开始超时后 */
    BEGINNING_TIMEOUT_AFTER = "BEGINNING_TIMEOUT_AFTER",
    /** 退回后 */
    RETURN_AFTER = "RETURN_AFTER",
    /** 审批人同意后 */
    APPROVER_APPROVAL_AFTER = "APPROVER_APPROVAL_AFTER",
    /** 审批人节点完成后 */
    APPROVAL_NODE_COMPLETED = "APPROVAL_NODE_COMPLETED",
    /** 审批人拒绝后 */
    APPROVER_APPROVAL_REJECTED = "APPROVER_APPROVAL_REJECTED",
    /** 转交后 */
    TRANSFER_AFTER = "TRANSFER_AFTER"
}

export enum ETheProcessNodeEditsTheDTO_isEnabledMessageNotification {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessRoleDataPermissionDTO_dataAuthType {
    SELF = "SELF",
    DEPT = "DEPT",
    ALL = "ALL",
    FLOW_FIELD = "FLOW_FIELD"
}

export enum EFlowPathEditPermissionEditDTO_flowStatus {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

export enum EFlowPathEditPermissionEditDTO_isEditable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathEditPermissionEditDTO_isDisabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathAddPermissionEditDTO_type {
    /** 可编辑 */
    EDIT = "EDIT",
    /** 只读 */
    READONLY = "READONLY",
    /** 隐藏 */
    HIDDEN = "HIDDEN"
}

export enum EFlowPathQueryPermissionEditDTO_isVisible {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathCopyPermissionEditDTO_isCanCopy {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventEditDTO_isSystemPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventEditDTO_triggerEventTiming {
    /** 流程完成后触发 */
    FLOW_COMPLETED_POST = "FLOW_COMPLETED_POST"
}

export enum EProcessEventEditDTO_operateFormType {
    /** 流程 */
    FLOW = "FLOW",
    /** 流程明细表 */
    FLOW_TABLE = "FLOW_TABLE"
}

export enum EProcessEventEditDTO_operateType {
    /** 更新数据 */
    UPDATE = "UPDATE",
    /** 更新入库数据 */
    UPDATE_STORAGE_IN = "UPDATE_STORAGE_IN",
    /** 更新出库数据 */
    UPDATE_STORAGE_OUT = "UPDATE_STORAGE_OUT",
    /** 更新收款数据 */
    UPDATE_RECEIVED = "UPDATE_RECEIVED",
    /** 更新应收数据 */
    UPDATE_RECEIVABLE = "UPDATE_RECEIVABLE",
    /** 更新付款数据 */
    UPDATE_PAID = "UPDATE_PAID",
    /** 更新应付数据 */
    UPDATE_PAYABLE = "UPDATE_PAYABLE",
    /** 新增数据 */
    INSERT = "INSERT"
}

export enum EProcessEventEditDTO_isTriggerFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventEditDTO_kitType {
    /** 入库套件 */
    STORAGE_IN = "STORAGE_IN",
    /** 出库套件 */
    STORAGE_OUT = "STORAGE_OUT",
    /** 出库库存套件 */
    STORAGE_OUT_STORAGE = "STORAGE_OUT_STORAGE",
    /** 调拨套件 */
    STORAGE_MOVE = "STORAGE_MOVE",
    /** 调拨库存套件 */
    STORAGE_MOVE_STORAGE = "STORAGE_MOVE_STORAGE",
    /** 收款套件 */
    RECEIVED = "RECEIVED",
    /** 应收套件 */
    RECEIVABLE = "RECEIVABLE",
    /** 应收收款套件 */
    RECEIVABLE_COLLECTION = "RECEIVABLE_COLLECTION",
    /** 付款套件 */
    PAID = "PAID",
    /** 应付套件 */
    PAYABLE = "PAYABLE",
    /** 应付付款套件 */
    PAYABLE_PAYMENT = "PAYABLE_PAYMENT",
    /** 单据日期 */
    BILL_DATE = "BILL_DATE"
}

export enum EProcessEventSettingsEditDTO_childFormInsertType {
    /** 所有数据 */
    ALL = "ALL",
    /** 通过条件过滤 */
    FILTER = "FILTER"
}

export enum EProcessEventSettingsEditDTO_isDirectDeleteTargetForm {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheBasisForInsertingTheServiceEventDetailDataGroup_isGroup {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventOperationSettingsEditTheDTO_sourceType {
    /** 当前表单 */
    FORM = "FORM",
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 空值 */
    NULL = "NULL"
}

export enum EProcessEventOperationSettingsEditTheDTO_isDisableEdit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventActionFilterEditDTO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EProcessEventActionFilterEditDTO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EProcessEventActionFilterEditDTO_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EApplyTheNewEventSubtableFilterToRequestADTO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EApplyTheNewEventSubtableFilterToRequestADTO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EApplyTheNewEventSubtableFilterToRequestADTO_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EProcessPrintTemplateEditDTO_printType {
    /** 单行 */
    SINGLE_LINE = "SINGLE_LINE",
    /** 多行 */
    MULTI_LINE = "MULTI_LINE"
}

export enum ESetOfConditions_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum ESetOfConditions_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum ESetOfConditions_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum ESetOfConditions_isUseDateShowFormat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessVersionRespondsToVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessVersionRespondsToVO_isMultiFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

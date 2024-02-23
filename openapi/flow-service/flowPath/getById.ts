import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程相关/getByIdUsingGET_2
export default function fetchMethod(params: { enterpriseId: number; id: number }, extraOptions?: any) {
    return http<IJSONResultProcessDetailsReturnVOForEditing>(
        {
            url: "/flow-service/flowPath/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«流程明细针对编辑返回VO»
export interface IJSONResultProcessDetailsReturnVOForEditing {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessDetailsAreReturnedToVOForEditing;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程明细针对编辑返回VO
export interface IProcessDetailsAreReturnedToVOForEditing {
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 名称
    lastName: string;
    // 创建员工名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新员工id
    updateUserId: number;
    // 更新员工名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 是否是树状应用
    isTree: string;
    // 流程版本id(这里是最后一个版本)
    flowPathVersionId: number;
    // 编号
    code: string;
    // 应用类型
    type: string;
    // 应用类型描述
    typeDesc: string;
    // 最新版本号
    lastVersionRank: number;
    // 简介
    lastDescription: string;
    // 排序
    sort: number;
    // 发布终端值合计
    lastPublishTotal: number;
    // 是否系统级流程
    isSystem: string;
    // 系统流程类型
    flowPathSystemType: string;
    // 表单集
    formFields: IProcessFormVO[];
    // 节点信息
    flowPathNode: ITheProcessNodeReturnsVOForEditing;
    // 权限设置
    permission: IProcessPermissionsVO;
    // 业务事件集
    flowPathEvents: IProcessEventEditVO[];
    // 自定义通知内容关联的字段serialNo
    customFieldSerialNos: string[];
    // 打印模板
    printTemplates: IProcessPrintTemplateReturnsVO[];
    // 发布企业路由位置
    publishEnterpriseRouterList: IPublishEnterpriseRouterResultDTO[];
    // 流程结果通知
    flowPathResultNotify: string;
    // 重新提交通知
    recommitNotify: string;
    // 作废停用通知
    invalidNotify: string;
    // 删除通知
    deleteNotify: string;
    // 应用访问链接
    accessUrl: string;
    // 代办设置
    todoConfig: ITheProcessCustomNotificationFieldRespondsToVO;
    // 详细页配置列表
    detailPageConfigList: IFlowPathDetailPageConfigVO[];
    // 应用服务包ID
    appServicePackId: number;
    // 应用级别
    applicationLevel: string;
}
// 流程表单VO
export interface IProcessFormVO {
    // id
    id: number;
    // 所属流程id
    flowPathId: number;
    // 所属流程版本id
    flowPathVersionId: number;
    // 流程版本号
    flowPathVersionRank: number;
    // 类型分组
    typeGroup: string;
    // 类型
    type: string;
    // 是否是表格内字段
    isTableField: string;
    // 类型描述
    typeDesc: string;
    // 表格类型
    tableType: string;
    // 是否是系统表单字段
    isSystem: string;
    // 是否是系统预置字段
    isSystemPreset: string;
    // 是否是系统必填字段
    isSystemMust: string;
    // 是否在表格中展示列
    isTableShow: string;
    // 是否是套件
    isKit: string;
    // 套件类型
    kitType: string;
    // 套件字段类型
    kitColumnType: string;
    // 选择类型
    selectorType: string;
    // 名称
    name: string;
    // code
    code: string;
    // 序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用
    serialNo: string;
    // 提示
    tip: string;
    // 说明描述
    description: string;
    // 宽度
    span: number;
    // 默认值类型
    defaultType: string;
    // 默认日期类型
    defaultDateType: string;
    // 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"]
    defaultValue: string;
    // 计算公式
    formula: string;
    // 计算公式用到的表单序号值集
    formulaFormFieldSerialNos: ITheProcessFormFormulaFieldReturnsVO[];
    // 编码规则
    codeNumberRules: IProcessFormFieldEncodingRuleDetailsVO[];
    // 是否必填
    isMust: string;
    // 允许扫码
    isScan: string;
    // 数值类型
    numberType: string;
    // 小数位数
    scaleDigit: number;
    // 是否允许负数
    canNegative: string;
    // 数值格式
    numberFormat: string;
    // 日期类型
    dateType: string;
    // 选项集 - json数组
    selectors: string;
    // 选项集
    selectorList: IFormFieldOption[];
    // 选项集字典
    selectorDictionaryList: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    // 下拉选项关联显示列表
    selectorAssociateDisplayList: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    // 选项值来源
    selectorOptionSource: string;
    // 选项值来源业务编码
    selectorOptionSourceBusinessCode: string;
    // 选项值是否可修改
    isCanModifySelectorOption: string;
    // 关联表单code
    formRpCode: string;
    // 关联详细表单的编码
    formDetailRpCode: string;
    // 关联表单选项显示字段code
    formRpSelectorShowFieldCode: string;
    // 关联表单选项显示字段Serial No
    formRpSelectorShowFieldSerialNo: string;
    // 关联表单筛选条件组集
    formRpFilterGroups: IProcessFormsAssociateFormFilterGroupVO[];
    // 关联表单填充规则集
    formRpFills: IProcessFormAssociatedFormFillVO[];
    // 表格自定义字段集
    tableCustomFormFields: IProcessFormVO[];
    // 选择框样式
    style: string;
    // 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}]
    formRpShowFields: Record<string, any>[];
    // 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}]
    formRpMultiGroupFields: Record<string, any>[];
    // 排序
    sort: number;
    // 父级流程表单id
    parentFlowPathFormFieldId: number;
    // 父级流程表单编码
    parentFlowPathFormFieldCode: string;
    // 前端配置拓展字段
    meta: Record<string, Record<string, any>>;
    // 组织类型
    organizationType: string;
    // 表格字段列表
    actualFields: Record<string, any>[];
    // 是否自动获取位置
    isAutoGetLocation: string;
    // 地址类型
    addressType: string;
    // 不允许重复
    unableRepeat: string;
    // 表格内不允许重复
    unableRepeatInTable: string;
    // 重复提示
    repeatTip: string;
    // 是否使用有账号的员工
    isUseEmployeesWithAccounts: string;
    // 关联查询显示样式
    associationQueryShowStyle: string;
    // 数据联动
    dataLinkage: IFlowPathFormFieldDataLinkageVO;
    // 字段值限制规则
    valueLimitRules: IFlowPathFormFieldValueLimitRuleEditDTO[];
    // 是否启用超链接
    isHyperlinkEnabled: string;
    // 是否表格内批量选择
    isInsideTableBatchSelect: string;
    // 当动态控件选择了当前字段后，对应取关联表单的值是
    dynamicControlValueFieldSerialNo: string;
    // 处理人显示字段序列号
    processorShowFieldSerialNo: string;
    // 处理人显示字段编码
    processorShowFieldCode: string;
}
// 流程表单公式字段返回VO
export interface ITheProcessFormFormulaFieldReturnsVO {
    // 类型
    type: string;
    // 计算公式用到的表单序号值
    serialNo: string;
    // 用到的函数类型
    funType: string;
}
// 流程表单字段编码规则明细VO
export interface IProcessFormFieldEncodingRuleDetailsVO {
    // id
    id: number;
    // 设置类型
    type: string;
    // 日期格式 - 用于日期
    dateFormat: string;
    // 固定值 - 用于固定值
    fixValue: string;
    // 位数 - 用于流水
    ruleLength: number;
    // 初始值 - 用于流水
    startValue: number;
    // 递增值 - 用于流水
    stepValue: number;
    // 是否是编码依据 - 仅能配置一项为编码依据
    isCodeAccording: string;
    // 所属流程表单code -- 针对引用字段类型
    flowPathCode: string;
    // 所属流程表单字段序列值 -- 针对引用字段类型
    flowPathFormFiledSerialNo: string;
    // 所属流程表单字段序列值 -- 针对引用字段类型
    flowPathFormFiledCode: string;
    // 规则ID
    flowPathFormFieldCodeNumberRuleId: number;
    // 排序
    sort: number;
}
// FormFieldOption
export interface IFormFieldOption {
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    color: string;
}
// 流程表单字段关联字典选项集VO
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    // undefined
    color: string;
    // undefined
    name: string;
    // 预设名称
    presetName: string;
    // undefined
    code: string;
    // 是否预设
    isPreset: string;
    // 能否修改
    isCanModify: string;
    // 能否删除
    isCanDelete: string;
}
// 流程表单字段下拉选项关联显示VO
export interface ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO {
    // 所属流程表单字段id
    flowPathFormFieldId: number;
    // 所属流程表单字段编号
    flowPathFormFieldCode: string;
    // 所属流程表单字段序列号
    flowPathFormFieldSerialNo: string;
    // 下拉选项的code
    selectorItemCode: string;
    // 关联显示字段的序列号集合
    associateDisplayFieldSerialNos: Record<string, any>[];
}
// 流程表单关联表单筛选条件组VO
export interface IProcessFormsAssociateFormFilterGroupVO {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 条件集
    filters: IProcessFormsAssociateFormFilterVO[];
    // 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组
    isSystemDefault: string;
    // 数据联动ID
    dataLinkageId: number;
    // 表单字段ID
    flowPathFormFieldId: number;
}
// 流程表单关联表单筛选条件VO
export interface IProcessFormsAssociateFormFilterVO {
    // id
    id: string;
    // 被判断的字段序号值
    columnSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断对象类型
    compareObjType: string;
    // 判断对象字段序号值
    compareColumnSerialNo: string;
    // 判断对象字段的关联表单字段序列号
    compareColumnRpFormFieldSerialNo: string;
    // 判断对象自定义值
    compareCustomValue: string;
    // 自定义值回显
    compareCustomValueEcho: string;
    // 所属流程表单关联表单筛选条件组id
    flowPathFormFieldFormRpFilterGroupId: number;
    // 区间范围 -- 下限
    rangeLowerLimit: string;
    // 区间范围 -- 上限
    rangeUpperLimit: string;
    // 日期动态范围
    dateDynamicRange: string;
    // 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。 
    isUseDateShowFormat: string;
    // 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑
    isDisableEdit: string;
}
// 流程表单关联表单填充VO
export interface IProcessFormAssociatedFormFillVO {
    // id
    id: number;
    // 所属流程表单字段id
    flowPathFormFieldId: number;
    // 被采取的字段序号值
    columnSerialNo: string;
    // 被采取的字段序号值的下级字段序号值
    secondarySourceFieldSerialNo: string;
    // 被采取的字段序号值的下级字段编码
    secondarySourceFieldCode: string;
    // 填充到的目标字段序号值
    fillFormFieldSerialNo: string;
    // 字段填充方式
    fillWay: string;
    // 是否警用编辑
    isDisableEdited: string;
    // 是否允许修改填充内容- 默认是 Y
    isAllowModificationOfFillContent: string;
}
// FlowPathFormFieldDataLinkageVO
export interface IFlowPathFormFieldDataLinkageVO {
    // id
    id: number;
    // 数据来源应用编码（即联动表单）
    sourceFormRpCode: string;
    // 数据来源应用表格编码（即联动表单）
    sourceFormDetailRpCode: string;
    // 数据来源字段编码（取值字段编号）
    sourceFieldCode: string;
    // 数据来源字段序列号（取值字段的序列号）
    sourceFieldSerialNo: string;
    // 筛选条件组集
    filterGroups: IProcessFormsAssociateFormFilterGroupVO[];
}
// FlowPathFormFieldValueLimitRuleEditDTO
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    // 值限制规则条件
    limitRuleCondition: string;
    // 值限制规则类型
    limitRuleType: string;
    // 计算公式
    formula: string;
    // 计算公式用到的表单序号值集
    formulaFormFieldSerialNos: Record<string, any>[];
    // 前端配置拓展字段
    meta: Record<string, Record<string, any>>;
}
// 流程节点针对编辑返回VO
export interface ITheProcessNodeReturnsVOForEditing {
    // id
    id: number;
    // 节点类型
    type: string;
    // 前节点id
    previousFlowPathNodeId: number;
    // 后节点id
    nextFlowPathNodeId: number;
    // 父节点id - 子节点有值
    parentFlowPathNodeId: number;
    // 所属分支节点id - 子分支下的所有流程节点均属于当前子分支
    branchesFlowPathNodeId: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 序号值 - 由前端生成，需要每个节点唯一，用于新增节点时，互相关联用
    serialNo: string;
    // 负责人集
    leaderUsers: IProcessNodeExecutorVO[];
    // 抄送人集
    carbonCopyUsers: IProcessNodeExecutorVO[];
    // 审批类型
    approvalType: string;
    // 是否允许回退
    isBack: string;
    // 回退类型
    backType: string;
    // 回退流程节点id - 返回指定节点时有值
    backFlowPathNodeId: number;
    // 回退流程节点序列值 - 返回指定节点时有值
    backFlowPathNodeSerialNo: string;
    // 表单操作权限集
    formFieldPermissions: IProcessFormActionPermissionSetReturnsVO[];
    // 条件组集
    condiGroups: ITheProcessNodeConditionGroupReturnsVOForEditing[];
    // 是否开启超时设置
    enabledTimeout: string;
    // 超时配置
    flowPathNodeTimeoutConfEditDtos: ITheProcessNodeTimeoutConfigurationReturnsVOForEditing[];
    // 是否自定义提交按钮文案
    isCustomSubmitContent: string;
    // 自定义提交按钮文案
    customSubmitContent: string;
    // 下节点信息
    nextNode: ITheProcessNodeReturnsVOForEditing;
    // 分支子节点
    branches: ITheProcessNodeReturnsVOForEditing[];
    // 节点启动方式
    launchType: string;
    // 执行类型
    executeType: string;
    // 是否自定义接受按钮文案
    isCustomAcceptContent: string;
    // 自定义接受按钮文案
    customAcceptContent: string;
    // 是否显示流程接受按钮
    isShowAcceptButton: string;
    // 是否自定义同意按钮文案
    isCustomPassApprovalContent: string;
    // 自定义同意按钮文案
    customPassApprovalContent: string;
    // 是否自定义拒绝按钮文案
    isCustomRefuseApprovalContent: string;
    // 自定义拒绝按钮文案
    customRefuseApprovalContent: string;
    // 是否显示流程拒绝按钮
    isShowRefuseButton: string;
    // 是否自定义回退按钮文案
    isCustomBackContent: string;
    // 自定义回退按钮文案
    customBackContent: string;
    // 是否显示流程回退按钮
    isShowBackButton: string;
    // 消息配置列表
    messageConfigList: ITheProcessNodeEditsTheDTO[];
    // 是否启用接受超时
    isEnabledAcceptTimeout: string;
    // 审批人来自
    approverFrom: string;
    // 是否启用转交
    enabledTransfer: string;
    // 自定义转交按钮文案
    customTransferContent: string;
    // 转交人员范围
    transferScopeType: string;
    // 转交人集
    transferUsers: IProcessNodeExecutorVO[];
    // 是否启用表单暂存
    enableFormStaging: string;
    // 自定义表单暂存文本
    customFormStagingContent: string;
    // 是否自定义流程开始按钮文案
    isCustomBeginningContent: string;
    // 自定义流程开始按钮文案
    customBeginningContent: string;
    // 是否显示开始按钮
    isShowBeginningButton: string;
    // 是否启用流程开始超时
    isEnabledBeginningTimeout: string;
    // 上一节点限制指定范围
    previousNodeAssignmentRange: string;
    // 上一节点选项人员集合
    previousNodeUserOptions: IProcessNodeExecutorVO[];
}
// 流程节点执行人VO
export interface IProcessNodeExecutorVO {
    // id
    id: number;
    // 名称
    name: string;
    // 执行人id
    executorId: number;
    // 执行人类型
    executorType: string;
    // 执行人系统控件类型
    executorSysType: string;
    // 组织字段序列 - 即动态控件
    organizationFieldSerialNo: string;
    // flowPathId
    flowPathId: number;
    // 节点ID
    flowPathNodeId: number;
}
// 流程表单操作权限集返回VO
export interface IProcessFormActionPermissionSetReturnsVO {
    // id
    id: number;
    // 表单字段id
    flowPathFormFieldId: number;
    // 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用
    flowPathFormFieldSerialNo: string;
    // 表单字段名称
    flowPathFormFieldName: string;
    // 表单字段类型
    flowPathFormFieldType: string;
    // 权限类型
    permissionsType: string;
    // 表格权限集
    tableFormFieldPermissions: IProcessFormActionPermissionSetReturnsVO[];
}
// 流程节点条件组针对编辑返回VO
export interface ITheProcessNodeConditionGroupReturnsVOForEditing {
    // id
    id: number;
    // 条件集
    condis: ITheProcessNodeConditionReturnsVOForEditing[];
}
// 流程节点条件针对编辑返回VO
export interface ITheProcessNodeConditionReturnsVOForEditing {
    // id
    id: number;
    // 条件类型
    type: string;
    // 默认条件-条件类型为系统内置时有值
    defaultCondi: string;
    // 表单字段id-条件类型为表单字段时有值
    flowPathFormFieldId: number;
    // 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用
    flowPathFormFieldSerialNo: string;
    // 对比值 - 暂时仅对数值内有效
    compareValue: string;
    // 比较值回显
    compareValueEcho: string;
    // 选项值
    selectorValues: string[];
    // 选项信息集
    selectorInfos: INameNumberVO[];
    // 判断方式
    compareMode: string;
    // 判断目标来源
    compareTargetFromSource: string;
    // 关联表单-比较目标字段ID
    targetFieldId: number;
    // 关联表单-比较目标字段序列
    targetFieldSerialNo: string;
    // 关联表单-比较目标字段编码
    targetFieldCode: string;
    // 自定义-日期动态区间
    dateDynamicRange: string;
    // 前端Meta
    frontendMeta: string;
}
// 名称，编号VO
export interface INameNumberVO {
    // 名称
    name: string;
    // 编号
    code: string;
}
// 流程节点超时配置针对编辑返回VO
export interface ITheProcessNodeTimeoutConfigurationReturnsVOForEditing {
    // id
    id: number;
    // 超时的步骤类型
    stepType: string;
    // 超时类型
    timeoutType: string;
    // 超时值 - 超时类型为自定义时有值
    timeoutTimeValue: number;
    // 超时值类型 - 超时类型为自定义时有值
    timeoutTimeType: string;
    // 超时表单字段id
    timeoutFlowPathFormFieldId: number;
    // 超时表单字段序列值
    timeoutFlowPathFormFieldSerialNo: string;
    // 预警处理方式
    earlyWarningHandleType: string;
    // 预警超时前发送通知 超时值
    earlyWarningTimeValue: number;
    // 预警超时前发送通知 超时值类型
    earlyWarningTimeType: string;
    // 预警提醒人集
    earlyWarningUsers: IProcessNodeExecutorVO[];
    // 预警提醒方式
    earlyWarningSendType: string;
    // 超时处理方式
    timeoutHandleType: string;
    // 超时后通知类型
    timeoutAfterSendType: string;
    // 超时提醒人集
    timeoutUsers: IProcessNodeExecutorVO[];
    // 超时通知方式
    timeoutSendType: string;
    // 消息配置列表
    messageConfigList: ITheProcessNodeEditsTheDTO[];
}
// 流程节点编辑DTO
export interface ITheProcessNodeEditsTheDTO {
    // id
    id: number;
    // 消息触发时机
    triggerTiming: string;
    // 消息配置ID列表
    messageConfigIdList: number[];
    // 是否启用消息通知
    isEnabledMessageNotification: string;
    // 引用的ID。比如超时配置
    refId: number;
}
// 流程权限VO
export interface IProcessPermissionsVO {
    // 按钮权限集
    buttons: ITheRouteButtonReturnsVO[];
    // 角色权限集
    rolePermissions: IProcessRolePermissionVO[];
    // 表单控制 - 编辑权限列表
    editPermissionList: IAddedPermissionEdit2[];
    // 表单控制 - 新增权限列表
    addPermissionList: INewPermissionEdit[];
    // 表单控制 - 查询权限列表
    queryPermissionList: IQueryPermissionEditing[];
    // 表单控制 - 复制权限列表
    copyPermissionList: IAddedPermissionEdit1[];
}
// 路由按钮返回VO
export interface ITheRouteButtonReturnsVO {
    // id
    id: number;
    // 企业路由id
    enterpriseRouterId: number;
    // 按钮名称
    name: string;
    // 所属权限编码
    permissionCode: string;
    // 类型
    type: string;
    // 定位
    pos: string;
    // url
    url: string;
}
// 流程角色权限VO
export interface IProcessRolePermissionVO {
    // 角色id
    roleId: number;
    // 角色名称
    roleName: string;
    // 权限码集
    permissionCodes: string[];
    // 数据权限集
    dataAuthList: IProcessRoleDataPermissionVO[];
}
// 流程角色数据权限VO
export interface IProcessRoleDataPermissionVO {
    // 数据权限类型
    dataAuthType: string;
    // 数据权限类型
    roleDataAuthFieldList: IProcessRoleDataPermissionFieldVO[];
}
// 流程角色数据权限字段VO
export interface IProcessRoleDataPermissionFieldVO {
    // 流程表单字段序列号
    flowPathFormFieldSerialNo: string;
    // 流程表单字段名
    flowPathFormFieldName: string;
}
// 新增权限编辑_2
export interface IAddedPermissionEdit2 {
    // ID
    id: number;
    // 流程状态
    flowStatus: string;
    // 是否可编辑
    isEditable: string;
    // 是否禁用
    isDisabled: string;
}
// 新增权限编辑
export interface INewPermissionEdit {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 权限类型
    type: string;
}
// 查询权限编辑
export interface IQueryPermissionEditing {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 是否可见
    isVisible: string;
}
// 新增权限编辑_1
export interface IAddedPermissionEdit1 {
    // ID
    id: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 流程字段编码
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
    // 是否可以复制
    isCanCopy: string;
}
// 流程事件编辑VO
export interface IProcessEventEditVO {
    // id
    id: number;
    // 标题
    title: string;
    // 是否系统预设
    isSystemPreset: string;
    // 触发流程节点序号值
    triggerFlowPathNodeSerialNoList: string[];
    // 触发事件的时机- 即事件不是由流程提交触发，而是因为某个事件发生触发-例如当流程完成后触发该事件
    triggerEventTiming: string;
    // 操作表单类型
    operateFormType: string;
    // 操作表单code
    operateFormCode: string;
    // 操作方式
    operateType: string;
    // 触发条件生效设置
    validSetting: IProcessEventSettingsEditVO;
    // 触发条件失效设置
    invalidSetting: IProcessEventSettingsEditVO;
    // 是否触发流程 -- 针对新增数据事件而言
    isTriggerFlow: string;
    // 套件类型
    kitType: string;
    // 子表新增方式 -- 针对新增事件
    childFormInsertType: string;
    // 是否直接删除目标表单 -- 针对新增事件
    isDirectDeleteTargetForm: string;
    // 在指定的表格编码的维度上新增数据 -- 针对新增事件。如果为空，则维度以主表的维度来新增数据，不为空，则以指定明细表的维度来新增数据）
    addDataInDimensionWhereTableCode: string;
}
// 流程事件设置编辑VO
export interface IProcessEventSettingsEditVO {
    // 子表新增方式 -- 针对新增事件
    childFormInsertType: string;
    // 流程事件操作设置集
    operateSettings: IProcessEventActionSettingsEditVO[];
    // 流程事件操作筛选条件组集
    operateFilterGroups: IProcessEventActionFilterGroupEditVO[];
    // 触发条件筛选组
    triggerConditionFilterGroups: IProcessEventActionFilterGroupEditVO[];
    // 流程事件子表设置集合 -- 针对新增事件
    insertEventChildFormSettings: IApplyTheNewEventSubtableToSetTheResponseDTO[];
    // 明细分组
    detailGroup: IInsertBasis1ForTheServiceEventDetailsDataGroup;
    // 是否直接删除目标表单 -- 针对新增事件
    isDirectDeleteTargetForm: string;
    // 在指定的表格编码的维度上新增数据 -- 针对新增事件。如果为空，则维度以主表的维度来新增数据，不为空，则以指定明细表的维度来新增数据）
    addDataInDimensionWhereTableCode: string;
}
// 流程事件操作设置编辑VO
export interface IProcessEventActionSettingsEditVO {
    // id
    id: number;
    // 操作赋值字段序号值
    operateColumnSerialNo: string;
    // 值来源类型
    sourceType: string;
    // 表单字段序号值
    formFieldSerialNo: string;
    // 表单字段序号值(源.二级字段序列号)
    secondarySourceFieldSerialNo: string;
    // 表单字段序号值(源.二级字段序编码)
    secondarySourceFieldCode: string;
    // 计算公式
    formula: string;
    // 计算公式用到的表单序号值集
    formulaFormFieldSerialNos: ITheProcessFormFormulaFieldReturnsVO[];
    // 固定值
    fixedValue: string;
    // 固定值回显
    fixedValueEcho: string;
    // 前端配置拓展字段
    meta: Record<string, Record<string, any>>;
    // 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑
    isDisableEdit: string;
}
// 流程事件操作筛选条件组编辑VO
export interface IProcessEventActionFilterGroupEditVO {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 条件集
    filters: IProcessEventActionFilterEditVO[];
}
// 流程事件操作筛选条件编辑VO
export interface IProcessEventActionFilterEditVO {
    // id
    id: number;
    // 被判断的字段序号值
    columnSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断对象类型
    compareObjType: string;
    // 判断对象字段序号值
    compareColumnSerialNo: string;
    // 判断对象自定义值
    compareCustomValue: string;
    // 自定义值回显
    compareCustomValueEcho: string;
    // 区间范围 -- 下限
    rangeLowerLimit: string;
    // 区间范围 -- 上限
    rangeUpperLimit: string;
    // 日期动态范围
    dateDynamicRange: string;
}
// 应用新增事件子表设置响应DTO
export interface IApplyTheNewEventSubtableToSetTheResponseDTO {
    // id
    id: number;
    // 字段序列号
    flowPathFormFieldSerialNo: string;
    // 字段序列号
    filterGroups: IApplyTheNewEventSubtableConditionGroupResponseDTO[];
}
// 应用新增事件子表条件组响应DTO
export interface IApplyTheNewEventSubtableConditionGroupResponseDTO {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 条件集
    filters: IProcessEventActionFilterEditVO[];
}
// 插入业务事件-明细数据分组的依据_1
export interface IInsertBasis1ForTheServiceEventDetailsDataGroup {
    // 是否对明细数据进行分组
    isGroup: string;
    // 分组依据-表格字段类型编码
    groupingTableCode: string;
    // 分组依据-表格字段类型的序列号
    groupingTableSerialNo: string;
    // 分组依据-分组字段序列号列表
    groupingFieldSerialNoList: string[];
}
// 流程打印模板返回VO
export interface IProcessPrintTemplateReturnsVO {
    // 模板id
    id: number;
    // 模板名称
    name: string;
    // 模板结构代码
    templateStructure: string;
    // 打印类型
    printType: string;
    // 打印类型描述
    printTypeDesc: string;
}
// PublishEnterpriseRouterResultDTO
export interface IPublishEnterpriseRouterResultDTO {
    // 上级路由ID
    parentRouteId: number;
    // 所属排序位置-前端给的值不代表真实的顺序，仅仅代表该应用在第几号位置, 排在第一个，则排序位置为1，排在第二个则排序位置为2，依次类推
    sortOffset: number;
    // 当前路由ID
    routeId: number;
}
// 流程自定义通知字段响应VO
export interface ITheProcessCustomNotificationFieldRespondsToVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 所属流程id
    flowPathId: number;
    // 所属流程版本id
    flowPathVersionId: number;
    // 流程版本号
    flowPathVersionRank: number;
    // 标题定义
    title: string;
    // 标题字段序列号列表
    titleFieldSerialNoList: string[];
    // 内容字段序号列表
    contentFieldSerialNoList: string[];
}
// FlowPathDetailPageConfigVO
export interface IFlowPathDetailPageConfigVO {
    // ID
    id: number;
    // 引用当前表单的应用引擎编码
    refFlowPathCode: string;
    // 页签名称/别名
    aliasName: string;
    // 分组列表
    filterGroupList: IConditionGroup2[];
}
// 条件组_2
export interface IConditionGroup2 {
    // 过滤组的ID
    id: number;
    // 分页配置ID
    flowPathDetailPageConfigId: number;
    // 过滤列表
    filterList: IConditions[];
}
// 条件
export interface IConditions {
    // 过滤条件的ID
    id: number;
    // 所属流程表单关联表单筛选条件组id
    flowPathDetailPageFilterGroupId: number;
    // 所属流程表单字段id
    flowPathDetailPageConfigId: number;
    // 被判断的字段序列号
    columnSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断对象类型
    compareObjType: string;
    // 判断对象字段code
    compareColumnSerialNo: string;
    // 判断对象字段的关联表单字段序列号
    compareColumnRpFormFieldSerialNo: string;
    // 判断对象自定义值
    compareCustomValue: string;
    // 判断对象自定义显示值
    compareCustomValueEcho: string;
    // 区间范围 -- 下限
    rangeLowerLimit: string;
    // 区间范围 -- 上限
    rangeUpperLimit: string;
    // 日期动态范围
    dateDynamicRange: string;
    // 是否使用日期的显示格式来做为筛选条件
    isUseDateShowFormat: string;
}

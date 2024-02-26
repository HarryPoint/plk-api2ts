import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工艺路径相关/getFlowPathStructureDataUsingPOST_29
*/
export default function fetchMethod(options: { data: IProcessStructureSearchVO }, extraOptions?: any) {
    return http<IJSONResultProcessPathDynamicDataVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/routing/getFlowPathStructureData",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程结构搜索VO */
export interface IProcessStructureSearchVO {
    /** 流程任务id */
    flowPathTaskId?: number;
    /** 数据id */
    id?: number;
}
/** JSONResult«工艺路径动态数据VO» */
export interface IJSONResultProcessPathDynamicDataVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathDynamicDataVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺路径动态数据VO */
export interface IProcessPathDynamicDataVO {
    /** 流程id */
    flowPathId?: number;
    /** 流程版本 */
    flowPathVersionId?: number;
    /** 流程code */
    flowPathCode?: string;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: string;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 流程工单id */
    flowPathWorkOrderId?: number;
    /** 表单结构 */
    structures?: IFormStructureVO[];
    /** 数据 */
    data?: Record<string, Record<string, any>>;
    /** 工艺路径步骤集 */
    routingSteps?: IProcessPathDetailsStepsVO[];
}
/** 表单结构VO */
export interface IFormStructureVO {
    /** 节点表单关联id */
    flowPathNodeFormFieldPermissionsRpId?: number;
    /** 所属表单字段id */
    flowPathFormFieldId?: number;
    /** 表单字段信息 */
    formField?: IProcessFormVO;
    /** 权限类型 */
    permissionsType?: string;
    /** 表格内字段结构集 */
    tableStructure?: IFormStructureVO[];
}
/** 流程表单VO */
export interface IProcessFormVO {
    /** id */
    id?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 类型分组 */
    typeGroup?: string;
    /** 类型 */
    type: string;
    /** 是否是表格内字段 */
    isTableField?: string;
    /** 类型描述 */
    typeDesc?: string;
    /** 表格类型 */
    tableType?: string;
    /** 是否是系统表单字段 */
    isSystem?: string;
    /** 是否是系统预置字段 */
    isSystemPreset?: string;
    /** 是否是系统必填字段 */
    isSystemMust?: string;
    /** 是否在表格中展示列 */
    isTableShow?: string;
    /** 是否是套件 */
    isKit?: string;
    /** 套件类型 */
    kitType?: string;
    /** 套件字段类型 */
    kitColumnType?: string;
    /** 选择类型 */
    selectorType?: string;
    /** 名称 */
    name: string;
    /** code */
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
    defaultType?: string;
    /** 默认日期类型 */
    defaultDateType?: string;
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"] */
    defaultValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: ITheProcessFormFormulaFieldReturnsVO[];
    /** 编码规则 */
    codeNumberRules?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 是否必填 */
    isMust?: string;
    /** 允许扫码 */
    isScan?: string;
    /** 数值类型 */
    numberType?: string;
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否允许负数 */
    canNegative?: string;
    /** 数值格式 */
    numberFormat?: string;
    /** 日期类型 */
    dateType?: string;
    /** 选项集 - json数组 */
    selectors?: string;
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 选项集字典 */
    selectorDictionaryList?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    /** 选项值来源 */
    selectorOptionSource?: string;
    /** 选项值来源业务编码 */
    selectorOptionSourceBusinessCode?: string;
    /** 选项值是否可修改 */
    isCanModifySelectorOption?: string;
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单的编码 */
    formDetailRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单筛选条件组集 */
    formRpFilterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
    /** 关联表单填充规则集 */
    formRpFills?: IProcessFormAssociatedFormFillVO[];
    /** 表格自定义字段集 */
    tableCustomFormFields?: IProcessFormVO[];
    /** 选择框样式 */
    style?: string;
    /** 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}] */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}] */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 排序 */
    sort?: number;
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: number;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 组织类型 */
    organizationType?: string;
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 是否自动获取位置 */
    isAutoGetLocation?: string;
    /** 地址类型 */
    addressType?: string;
    /** 不允许重复 */
    unableRepeat?: string;
    /** 表格内不允许重复 */
    unableRepeatInTable?: string;
    /** 重复提示 */
    repeatTip?: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: string;
    /** 关联查询显示样式 */
    associationQueryShowStyle?: string;
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageVO;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
    /** 是否启用超链接 */
    isHyperlinkEnabled?: string;
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
}
/** 流程表单公式字段返回VO */
export interface ITheProcessFormFormulaFieldReturnsVO {
    /** 类型 */
    type: string;
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 用到的函数类型 */
    funType?: string;
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: number;
    /** 设置类型 */
    type?: string;
    /** 日期格式 - 用于日期 */
    dateFormat?: string;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: string;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: number;
    /** 排序 */
    sort?: number;
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
/** 流程表单字段关联字典选项集VO */
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    /** undefined */
    color?: string;
    /** undefined */
    name?: string;
    /** 预设名称 */
    presetName?: string;
    /** undefined */
    code?: string;
    /** 是否预设 */
    isPreset?: string;
    /** 能否修改 */
    isCanModify?: string;
    /** 能否删除 */
    isCanDelete?: string;
}
/** 流程表单字段下拉选项关联显示VO */
export interface ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO {
    /** 所属流程表单字段id */
    flowPathFormFieldId?: number;
    /** 所属流程表单字段编号 */
    flowPathFormFieldCode?: string;
    /** 所属流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 下拉选项的code */
    selectorItemCode?: string;
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: Record<string, any>[];
}
/** 流程表单关联表单筛选条件组VO */
export interface IProcessFormsAssociateFormFilterGroupVO {
    /** id */
    id?: number;
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessFormsAssociateFormFilterVO[];
    /** 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组 */
    isSystemDefault?: string;
    /** 数据联动ID */
    dataLinkageId?: number;
    /** 表单字段ID */
    flowPathFormFieldId?: number;
}
/** 流程表单关联表单筛选条件VO */
export interface IProcessFormsAssociateFormFilterVO {
    /** id */
    id?: string;
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: string;
    /** 判断对象类型 */
    compareObjType?: string;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 自定义值回显 */
    compareCustomValueEcho?: string;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathFormFieldFormRpFilterGroupId?: number;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: string;
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: string;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: string;
}
/** 流程表单关联表单填充VO */
export interface IProcessFormAssociatedFormFillVO {
    /** id */
    id?: number;
    /** 所属流程表单字段id */
    flowPathFormFieldId?: number;
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 被采取的字段序号值的下级字段序号值 */
    secondarySourceFieldSerialNo?: string;
    /** 被采取的字段序号值的下级字段编码 */
    secondarySourceFieldCode?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: string;
    /** 是否警用编辑 */
    isDisableEdited?: string;
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: string;
}
/** FlowPathFormFieldDataLinkageVO */
export interface IFlowPathFormFieldDataLinkageVO {
    /** id */
    id?: number;
    /** 数据来源应用编码（即联动表单） */
    sourceFormRpCode?: string;
    /** 数据来源应用表格编码（即联动表单） */
    sourceFormDetailRpCode?: string;
    /** 数据来源字段编码（取值字段编号） */
    sourceFieldCode?: string;
    /** 数据来源字段序列号（取值字段的序列号） */
    sourceFieldSerialNo?: string;
    /** 筛选条件组集 */
    filterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
}
/** FlowPathFormFieldValueLimitRuleEditDTO */
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    /** 值限制规则条件 */
    limitRuleCondition?: string;
    /** 值限制规则类型 */
    limitRuleType?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}
/** 工艺路径详情步骤VO */
export interface IProcessPathDetailsStepsVO {
    /** 工艺路径步骤id */
    id?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 所属工序id */
    processId?: number;
    /** 所属工序名称 */
    processName?: string;
    /** 所属工序编号 */
    processCode?: string;
    /** 准备耗时(分钟) */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: string;
    /** 进出站方式 */
    inOutType?: string;
    /** 进出站方式描述 */
    inOutTypeDesc?: string;
    /** 是否允许直接出站 */
    allowDirectExit?: string;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: string;
    /** BOM物料消耗确认类型描述 */
    bomConsumeSureTypeDesc?: string;
    /** 合格产出工费 */
    producePrice?: number;
    /** 返工产出工费 */
    backProducePrice?: number;
    /** 所属进站工艺卡id */
    processSheetBeforeId?: number;
    /** 所属进站工艺卡名称 */
    processSheetBeforeName?: string;
    /** 所属进站工艺卡编号 */
    processSheetBeforeCode?: string;
    /** 所属出站工艺卡id */
    processSheetAfterId?: number;
    /** 所属出站工艺卡名称 */
    processSheetAfterName?: string;
    /** 所属出站工艺卡编号 */
    processSheetAfterCode?: string;
    /** 步骤对应bom详情 */
    stepBomDetails?: IProcessPathDetailsStepBomDetailsReturnToVO[];
    /** 质检方案集 */
    plans?: ITheDetailsOfTheInspectionSchemeAreReturnedToVO[];
    /** 产能-生产时间 */
    capacityProduceTime?: number;
    /** 产能-时间类型 */
    capacityTimeType?: string;
    /** 产能-生产数量 */
    capacityProduceQuantity?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}
/** 工艺路径详情步骤Bom明细返回VO */
export interface IProcessPathDetailsStepBomDetailsReturnToVO {
    /** id */
    id?: number;
    /** 所属主物料bom明细id */
    materialBomDetailId?: number;
    /** 所属bom物料id */
    childMaterialId?: number;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}
/** 质检方案明细返回VO */
export interface ITheDetailsOfTheInspectionSchemeAreReturnedToVO {
    /** id */
    id?: number;
    /** 质检方案名称 */
    name?: string;
    /** 质检方案编号 */
    code?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: number;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 适用物料集合 */
    materialList?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 质检项 */
    itemList?: IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO[];
    /** 版次号 */
    issueCode?: string;
    /** 附件文件id */
    attachedFileId?: number;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 质检方式 */
    type?: string;
    /** 质检比例 */
    qualityInspectionRatio?: number;
    /** 质检数量 */
    qualityInspectionQuantity?: number;
    /** 质检方式描述 */
    typeDesc?: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料单位 */
    unit?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料规格 */
    spec?: string;
    /** 计量单位id */
    unitId?: number;
    /** 库存可使用数 */
    storageUseQuantity?: number;
}
/** 质检方案质检项关联信息返回VO */
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO {
    /** 关联id */
    id?: number;
    /** 所属质检方案 */
    qualityInspectionPlanId?: number;
    /** 所属质检项id */
    qualityInspectionItemId?: number;
    /** 所属质检项名称 */
    qualityInspectionItemName?: string;
    /** 所属质检项编号 */
    qualityInspectionItemCode?: string;
    /** 质检方式 */
    qualityMethod?: string;
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 选择方式 */
    selectType?: string;
    /** 选择描述 */
    selectTypeDesc?: string;
    /** 选择项 */
    selectorList?: ITheInspectionItemOptionReturnsVO[];
    /** 数值质检标准 */
    numberStandard?: string;
    /** 数值质检标准描述 */
    numberStandardDesc?: string;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 质检标准说明 */
    standardDesc?: string;
}
/** 质检项选择项返回VO */
export interface ITheInspectionItemOptionReturnsVO {
    /** 选择项名称 */
    name?: string;
}

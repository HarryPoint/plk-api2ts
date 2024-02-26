import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/getFlowPathStructureDataUsingPOST_24
*/
export default function fetchMethod(options: { data: IProcessStructureSearchVO }, extraOptions?: any) {
    return http<IJSONResultProductionOrderDynamicDataVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getFlowPathStructureData",
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
/** JSONResult«生产订单动态数据VO» */
export interface IJSONResultProductionOrderDynamicDataVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderDynamicDataVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产订单动态数据VO */
export interface IProductionOrderDynamicDataVO {
    /** 数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程id */
    flowPathId?: number;
    /** 流程版本 */
    flowPathVersionId?: number;
    /** 流程code */
    flowPathCode?: string;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: ('Y' | 'N');
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 流程工单id */
    flowPathWorkOrderId?: number;
    /** 表单结构 */
    structures?: IFormStructureVO[];
    /** 排产信息 */
    planInfoList?: IProductionOrderDetailsProductionVO[];
    /** 物料信息 */
    materialInfo?: IProductionOrderDetailsMaterialInformationVO;
    /** 子物料生产信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 报废补单明细 */
    produceOrderSupplementList?: IProductionOrderDetailsSupplementVO[];
    /** 对应批次订单集合 */
    lotOrders?: IBatchOrderIsReturnedToVO[];
    /** 对应生产任务集合 */
    produceTasks?: IProductionOrderDetailsProductionTaskVO[];
    /** 操作日志列表 */
    operateLogList?: IProductionOrderDetailsOperationLogVO[];
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
    permissionsType?: ('EDIT' | 'READONLY' | 'HIDDEN');
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
    typeGroup?: ('FORM' | 'STYLE');
    /** 类型 */
    type: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 是否是表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 类型描述 */
    typeDesc?: string;
    /** 表格类型 */
    tableType?: ('DEFAULT');
    /** 是否是系统表单字段 */
    isSystem?: ('Y' | 'N');
    /** 是否是系统预置字段 */
    isSystemPreset?: ('Y' | 'N');
    /** 是否是系统必填字段 */
    isSystemMust?: ('Y' | 'N');
    /** 是否在表格中展示列 */
    isTableShow?: ('Y' | 'N');
    /** 是否是套件 */
    isKit?: ('Y' | 'N');
    /** 套件类型 */
    kitType?: ('STORAGE_IN' | 'STORAGE_OUT' | 'STORAGE_OUT_STORAGE' | 'STORAGE_MOVE' | 'STORAGE_MOVE_STORAGE' | 'RECEIVED' | 'RECEIVABLE' | 'RECEIVABLE_COLLECTION' | 'PAID' | 'PAYABLE' | 'PAYABLE_PAYMENT' | 'BILL_DATE');
    /** 套件字段类型 */
    kitColumnType?: ('MATERIAL_CODE' | 'MATERIAL' | 'MATERIAL_NAME' | 'WAREHOUSE_MATERIAL_RP_ID' | 'IN_STOREHOUSE' | 'OUT_STOREHOUSE' | 'IN_OUT_QUANTITY' | 'CUSTOMER' | 'BUSINESS_USER' | 'RECEIVED_AMOUNT' | 'RECEIVABLE_AMOUNT' | 'SUPPLIER' | 'PAID_AMOUNT' | 'PAYABLE_AMOUNT' | 'UNIT' | 'IN_STORE' | 'OUT_STORE' | 'USABLE_QUANTITY' | 'LOT_NO' | 'SERIAL_NO');
    /** 选择类型 */
    selectorType?: ('FLAT' | 'PULL_DOWN');
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
    defaultType?: ('FIXED' | 'FORMULA' | 'DATA_LINKAGE');
    /** 默认日期类型 */
    defaultDateType?: ('NONE' | 'SYSTEM' | 'FIX');
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"] */
    defaultValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: ITheProcessFormFormulaFieldReturnsVO[];
    /** 编码规则 */
    codeNumberRules?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 是否必填 */
    isMust?: ('Y' | 'N');
    /** 允许扫码 */
    isScan?: ('Y' | 'N');
    /** 数值类型 */
    numberType?: ('INTEGER' | 'DECIMAL');
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否允许负数 */
    canNegative?: ('Y' | 'N');
    /** 数值格式 */
    numberFormat?: ('F1' | 'F2' | 'F3' | 'F4');
    /** 日期类型 */
    dateType?: ('DAY' | 'MIN' | 'SECOND' | 'HOUR_MIN' | 'MONTH' | 'YEAR');
    /** 选项集 - json数组 */
    selectors?: string;
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 选项集字典 */
    selectorDictionaryList?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    /** 选项值来源 */
    selectorOptionSource?: ('DEFAULT_FILL' | 'SYSTEM_DICTIONARY');
    /** 选项值来源业务编码 */
    selectorOptionSourceBusinessCode?: ('MATERIAL_TYPE' | 'DEPARTMENT_ORG_CATEGORY' | 'DEPARTMENT_ORG_TYPE' | 'PROJECT_TYPE' | 'PROJECT_CATEGORY' | 'PROJECT_TASK_PRIORITY' | 'PROJECT_ACTION_ITEM_TYPE' | 'PROJECT_FEEDBACK_CYCLE' | 'PROJECT_MEETING_TYPE' | 'PROJECT_SECRET_TYPE' | 'QMS_ANNUAL_QUALITY_MONITOR_RATE' | 'QMS_QUALITATIVE_TARGET_VALUE' | 'QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT' | 'QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS' | 'QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES' | 'QMS_QUALITY_PERSONNEL_WORKING_FORM' | 'QMS_QUALITY_PERSONNEL_GROUP' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS' | 'QMS_SEAL_STYLE_QUALIFICATION' | 'QMS_SEAL_STATUS' | 'QMS_ANNUAL_QUALITY_TARGET_CATEGORY' | 'QMS_SAMPLING_STANDARDS_AQL' | 'QMS_SAMPLING_STANDARDS_CHARACTER_CODE' | 'QMS_SAMPLING_STANDARDS_LEVEL' | 'QMS_INSPECTION_INCOMING_TYPE' | 'QMS_PROJECT_TASK_REVIEW_RESULT' | 'QMS_PROJECT_TASK_DECISION_RESULT' | 'QMS_INSPECTION_BUSINESS_TYPE' | 'DEVICE_EMPLOYEE_MAINTAIN_LEVEL');
    /** 选项值是否可修改 */
    isCanModifySelectorOption?: ('Y' | 'N');
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
    style?: ('ADVANCED' | 'CASCADE');
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
    organizationType?: ('NONE' | 'CLASS_GROUP' | 'DEPARTMENT' | 'USER' | 'PROCESSOR');
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 是否自动获取位置 */
    isAutoGetLocation?: ('Y' | 'N');
    /** 地址类型 */
    addressType?: ('REGION_AND_DETAIL_ADDRESS' | 'REGION' | 'STREET_AND_DETAIL_ADDRESS' | 'STREET');
    /** 不允许重复 */
    unableRepeat?: ('Y' | 'N');
    /** 表格内不允许重复 */
    unableRepeatInTable?: ('Y' | 'N');
    /** 重复提示 */
    repeatTip?: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: ('Y' | 'N');
    /** 关联查询显示样式 */
    associationQueryShowStyle?: ('SINGLE' | 'TABLE');
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageVO;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
    /** 是否启用超链接 */
    isHyperlinkEnabled?: ('Y' | 'N');
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: ('Y' | 'N');
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
    type: ('CURRENT' | 'FORM_FIELD');
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 用到的函数类型 */
    funType?: ('DEFAULT' | 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'CONCAT');
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: number;
    /** 设置类型 */
    type?: ('FIXED' | 'DATE' | 'AUTO_NUMBER' | 'FLOW_PATH_FIELD' | 'ID36');
    /** 日期格式 - 用于日期 */
    dateFormat?: ('YEAR' | 'YEAR_MONTH' | 'YEAR_MONTH_DAY' | 'MONTH' | 'MONTH_DAY' | 'DAY');
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: ('Y' | 'N');
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
    isPreset?: ('Y' | 'N');
    /** 能否修改 */
    isCanModify?: ('Y' | 'N');
    /** 能否删除 */
    isCanDelete?: ('Y' | 'N');
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
    isSystemDefault?: ('Y' | 'N');
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
    compareType?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断对象类型 */
    compareObjType?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
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
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: ('Y' | 'N');
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: ('Y' | 'N');
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
    fillWay?: ('NONE' | 'LAST' | 'CONCAT' | 'SUM');
    /** 是否警用编辑 */
    isDisableEdited?: ('Y' | 'N');
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: ('Y' | 'N');
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
    limitRuleCondition?: ('EQ' | 'GT' | 'GE' | 'LT' | 'LE');
    /** 值限制规则类型 */
    limitRuleType?: ('NO_LIMIT' | 'FIXED_VALUE' | 'FORMULA');
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}
/** 生产订单详情 - 排产VO */
export interface IProductionOrderDetailsProductionVO {
    /** 排产类型 */
    planType?: ('AUTO' | 'HAND' | 'VAGUE');
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 计划创建时间 */
    createTime?: string;
    /** 计划人id */
    planUserId?: number;
    /** 计划人名称 */
    planUsername?: string;
    /** 任务下发时间 */
    issueTime?: string;
    /** 任务下发人id */
    issueUserId?: number;
    /** 任务下发人名称 */
    issueUsername?: string;
    /** 状态 */
    orderStatus?: ('CREATED' | 'PLAN' | 'ISSUE' | 'PRODUCE' | 'CANCEL' | 'CLOSE' | 'PART_COMPLETE' | 'COMPLETE');
    /** 生产订单id */
    produceOrderId?: number;
}
/** 生产订单详情 - 物料信息VO */
export interface IProductionOrderDetailsMaterialInformationVO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: number;
    /** 物料单位名称 */
    materialUnitName?: string;
    /** 物料单位编号 */
    materialUnitCode?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 计划生产数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 子物料信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 生产工艺id */
    produceTechnologyId?: number;
    /** 生产工艺名称 */
    produceTechnologyName?: string;
    /** 标准工艺id */
    standardTechnologyId?: number;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 序列号方案id */
    serialNoSchemeId?: number;
    /** 批次方案id */
    lotSchemeId?: number;
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 启用批次 */
    enableQualityTraceability?: ('Y' | 'N');
}
/** 生产订单详情 - 补单VO */
export interface IProductionOrderDetailsSupplementVO {
    /** id */
    id?: number;
    /** 报废补单订单编号 */
    code?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
}
/** 批次订单返回VO */
export interface IBatchOrderIsReturnedToVO {
    /** id */
    id?: number;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 来源批次号 */
    originalLotNo?: string;
    /** 对应生产订单id */
    produceOrderId?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 对应销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 总数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 总报废数量 */
    scrapTotalCount?: number;
    /** 实际剩余数量 */
    actualTotalCount?: number;
    /** 拆出数量 */
    changeTotalCount?: number;
    /** 生产工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 生产工艺路径名称 */
    produceTechnologyRoutingName?: string;
    /** 生产工艺路径编号 */
    produceTechnologyRoutingCode?: string;
    /** 当前流水类型(界面上的当前生产状态) */
    lastFlowType?: ('CREATED' | 'ISSUE' | 'MOVE_IN' | 'MOVE_OUT' | 'SCRAP' | 'HOLD_PAUSE' | 'HOLD' | 'RELEASE' | 'BACK' | 'MARGE' | 'SPLIT' | 'TRANSFER' | 'CHANGE_ROUTING' | 'ENTRUST');
    /** 当前流水类型描述 */
    lastFlowTypeDesc?: string;
    /** 当前对应工艺路径步骤id */
    lastProduceRoutingStepId?: number;
    /** 当前对应工序id */
    lastProcessId?: number;
    /** 当前对应工序名称 */
    lastProcessName?: string;
    /** 当前对应工序编号 */
    lastProcessCode?: string;
    /** 当前工艺步骤 - 用于展示工艺进度条 */
    lastRoutingStep?: number;
    /** 总工艺数 - 用于展示工艺进度条 */
    totalStepCount?: number;
    /** 状态 */
    status?: ('CREATED' | 'ISSUE' | 'PRODUCE' | 'HOLD' | 'CANCEL' | 'CLOSE');
    /** 状态描述 */
    statusDesc?: string;
    /** 来源集 */
    sourceList?: IBatchOrderSourceReturnedToVO[];
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 批次订单二维码值 */
    lotOrderQrcode?: string;
}
/** 批次订单来源返回VO */
export interface IBatchOrderSourceReturnedToVO {
    /** 来源类型 */
    sourceType?: ('MAJOR_DATA' | 'MARGE' | 'SPLIT' | 'TRANSFER');
    /** 来源类型描述 */
    sourceTypeDesc?: string;
    /** 来源批次单号 */
    sourceLotNo?: string;
}
/** 生产订单详情 - 生产任务VO */
export interface IProductionOrderDetailsProductionTaskVO {
    /** 生产任务id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务下发时间 */
    issueTime?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 计划生产数量 - 任务进度分母 */
    planProduceQuantity?: number;
    /** 当前完成数量 - 任务进度分子(合格数量) */
    currentCompleteQuantity?: number;
    /** 任务进度分子(补单数量) */
    supplementCompleteQuantity?: number;
    /** 状态 */
    status?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL');
    /** 状态描述 */
    statusDesc?: string;
    /** 进料数量 */
    moveInQuantity?: number;
    /** 出料数量 */
    moveOutQuantity?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 返工数量 */
    backQuantity?: number;
}
/** 生产订单详情 - 操作日志VO */
export interface IProductionOrderDetailsOperationLogVO {
    /** 操作人id */
    operateUserId?: number;
    /** 操作人名称 */
    operateUsername?: string;
    /** 操作时间 */
    operateTime?: string;
    /** 操作内容 */
    operateContent?: string;
}

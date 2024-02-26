import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getFlowPathAndTableColumnByFlowPathIdUsingGET
*/
export default function fetchMethod(params: { enterpriseId: number; flowPathId: number }, extraOptions?: any) {
    return http<IJSONResultProcessAndTableColumnVO>(
        {
            url: "/flow-service/flowPath/getFlowPathAndTableColumnByFlowPathId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«流程及表格列VO» */
export interface IJSONResultProcessAndTableColumnVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProceduresAndTablesListedVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 流程及表格列VO */
export interface IProceduresAndTablesListedVO {
    /** 流程id */
    flowPathId: number;
    /** 流程code */
    flowPathCode: string;
    /** 流程名称 */
    flowPathName: string;
    /** 系统流程类型 */
    flowPathSystemType: string;
    /** 表格列 */
    tableColumns: ITheProcessTableListsVO[];
}
/** 流程表格列VO */
export interface ITheProcessTableListsVO {
    /** id */
    id: number;
    /** 企业id */
    enterpriseId: number;
    /** 流程id */
    flowPathId: number;
    /** 流程版本id - 只有根据版本ID查询才有。如果为空，则默认就是最新版本 */
    flowPathVersionId: number;
    /** 列类型 */
    type: string;
    /** 列code */
    code: string;
    /** 列名称 */
    name: string;
    /** 流程表单id */
    flowPathFormFieldId: number;
    /** 表单类型分组 */
    formFieldTypeGroup: string;
    /** 表单类型 */
    formFieldType: string;
    /** 表格类型 */
    flowPathFormFieldTableType: string;
    /** 表格内字段集 */
    tableCustomFormFields: ITheProcessTableListsVO[];
    /** 编码字段编码规则集 */
    numberRuleDetails: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 选项集 */
    selectorList: IFormFieldOption[];
    /** 序号值 */
    serialNo: string;
    /** 定位类型 */
    fixType: string;
    /** 定位类型排序 */
    fixSort: number;
    /** 是否显示，控制配置表单是否显示 */
    isShow: string;
    /** 能否查询，控制查询条件是否可勾选 */
    canQuery: string;
    /** 排序 - 每个定位类型独立排序 */
    sort: number;
    /** 日期类型 */
    dateType: string;
    /** 是否表格字段 */
    isTableField: string;
    /** 父级流程表单id */
    parentFlowPathFormFieldId: number;
    /** 父级流程表单code */
    parentFlowPathFormFieldCode: string;
    /** 组织类型 */
    organizationType: string;
    /** 实际存储数据字段列表 --- 数据格式[{"code":"字段编码", "name":"字段名称", "addressFieldCode" : "地址字段编码", "addressFieldSerialNo": "地址字段序列号"}] */
    actualFields: Record<string, any>[];
    /** 地址类型 */
    addressType: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts: string;
    /** 关联表单code */
    formRpCode: string;
    /** 关联详细表单编码 */
    formDetailRpCode: string;
    /** 数值格式 */
    numberFormat: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo: string;
    /** 关联表单展示code集合 */
    formRpShowFields: Record<string, any>[];
    /** 关联表单多选分组字段code集合 */
    formRpMultiGroupFields: Record<string, any>[];
    /** 选择框样式 */
    style: string;
    /** 套件类型 */
    kitType: string;
    /** 套件字段类型 */
    kitColumnType: string;
    /** 数值类型 */
    numberType: string;
    /** 是否必填 */
    isMust: string;
    /** 小数位数 */
    scaleDigit: number;
    /** 是否是系统表单字段 这里表达的是审计字段：id、data_status、create_time 等等 */
    isSystem: string;
    /** 是否是系统预设字段 */
    isSystemPreset: string;
    /** 全局不允许重复 */
    unableRepeat: string;
    /** 表格内不允许重复 */
    unableRepeatInTable: string;
    /** 重复提示 */
    repeatTip: string;
    /** 是否超链接 */
    isHyperlinkEnabled: string;
    /** 默认值类型 */
    defaultType: string;
    /** 默认日期类型 */
    defaultDateType: string;
    /** 默认值 */
    defaultValue: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode: string;
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id: number;
    /** 设置类型 */
    type: string;
    /** 日期格式 - 用于日期 */
    dateFormat: string;
    /** 固定值 - 用于固定值 */
    fixValue: string;
    /** 位数 - 用于流水 */
    ruleLength: number;
    /** 初始值 - 用于流水 */
    startValue: number;
    /** 递增值 - 用于流水 */
    stepValue: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording: string;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId: number;
    /** 排序 */
    sort: number;
}
/** FormFieldOption */
export interface IFormFieldOption {
    /** undefined */
    name: string;
    /** undefined */
    code: string;
    /** undefined */
    color: string;
}

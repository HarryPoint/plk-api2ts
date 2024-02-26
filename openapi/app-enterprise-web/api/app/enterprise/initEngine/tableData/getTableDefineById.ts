import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/getTableDefineByIdUsingGET
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultTableDefinition>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/getTableDefineById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«表格定义» */
export interface IJSONResultTableDefinition {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITableDefinition;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 表格定义 */
export interface ITableDefinition {
    /** ID */
    id?: number;
    /** 表格编码 */
    code?: string;
    /** 表格名称 */
    name?: string;
    /** 应用 */
    application?: IApplicationDTO;
    /** 主要的业务字段编码 */
    mainBusinessFieldCode?: string;
    /** 预置应用类型 */
    presetApplicationType?: string;
    /** 预置应用类型 */
    importType?: string;
    /** 是否静态表格 */
    staticTable?: boolean;
    /** 字段定义列表 */
    fieldDefineList?: IFieldDefinition[];
}
/** ApplicationDTO */
export interface IApplicationDTO {
    /** undefined */
    id?: number;
    /** undefined */
    code?: string;
}
/** 字段定义 */
export interface IFieldDefinition {
    /** ID */
    id?: number;
    /** 字段编码 */
    code?: string;
    /** 字段名称 */
    name?: string;
    /** 原始字段编码(应用引擎的原始字段) */
    originalFieldCode?: string;
    /** 原始字段序列号(应用引擎的原始字段) */
    originalFieldSerialNo?: string;
    /** 原始字段名词 */
    originalFieldName?: string;
    /** 组名 */
    groupName?: string;
    /** 当前应用 */
    currentApplication?: IApplicationDTO;
    /** 关联应用 */
    associationApplication?: IApplicationDTO;
    /** 是否必填 */
    required?: boolean;
    /** 字段类型 */
    fieldType?: string;
    /** 业务类型序列 */
    fieldGroupSequence?: number;
    /** 默认分隔正则 */
    defaultSplitRegx?: string;
    /** 序列 */
    sequence?: number;
    /** 别名列表 */
    aliasList?: string[];
    /** 明细字段 */
    detailField?: boolean;
    /** 表定义ID */
    tableDefineId?: number;
    /** 选项值列表 */
    optionalValues?: IDictionaryDTO[];
    /** 上级字段编码 */
    parentFieldCode?: string;
    /** 上级字段名称 */
    parentFieldName?: string;
    /** 应用引擎原始字段ID */
    originalFieldId?: number;
    /** 显示内容字段编码 */
    showContentFieldCode?: string;
    /** 显示字段名称 */
    showContentFieldName?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 选择框数据来源 */
    selectionBoxDataSource?: string;
    /** 应用关联表单 */
    refAssociatedFormData?: boolean;
    /** 是否自定义字段 */
    isCustomFields?: string;
}
/** DictionaryDTO */
export interface IDictionaryDTO {
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}

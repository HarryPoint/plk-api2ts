import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/getTableDataByFileIdUsingGET
*/
export default function fetchMethod(options: { params: { fileId?: number } }, extraOptions?: any) {
    return http<IJSONResultTableData>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/byFileId/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«表格数据» */
export interface IJSONResultTableData {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITabularData;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 表格数据 */
export interface ITabularData {
    /** ID */
    id?: number;
    /** 表定义 */
    tableDefine?: IAssociationTableDefinition1;
    /** 模板 */
    template?: IAssociationTemplate;
    /** 文件ID */
    fileId?: number;
    /** 状态 */
    verificationStatus?: string;
    /** 数据导入状态 */
    importStatus?: string;
    /** 消息 */
    message?: string;
    /** 描述 */
    desc?: string;
    /** 自定义列标题 */
    customColumnTitle?: Record<string, ITitleDefineDTO>;
    /** 重复数据数量 */
    repeatDataQuantity?: number;
    /** 重复数据中的覆盖导入数量 */
    overrideImportQuantityInRepeat?: number;
    /** 重复数据中的取消导入数据 */
    cancelImportQuantityInRepeat?: number;
    /** 错误数据数量 */
    errorQuantity?: number;
    /** 可以导入的数量 */
    importsQuantity?: number;
}
/** 关联表定义_1 */
export interface IAssociationTableDefinition1 {
    /** undefined */
    id?: number;
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}
/** 关联模板 */
export interface IAssociationTemplate {
    /** undefined */
    id: number;
    /** undefined */
    code: string;
    /** undefined */
    name?: string;
}
/** TitleDefineDTO */
export interface ITitleDefineDTO {
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
}

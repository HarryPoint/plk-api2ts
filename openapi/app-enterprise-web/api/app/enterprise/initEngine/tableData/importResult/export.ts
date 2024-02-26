import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/exportNewTableDataAndImportResultUsingPOST
*/
export default function fetchMethod(data: ISearchRowData, params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/importResult/export",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 搜索行数据 */
export interface ISearchRowData {
    /** 表数据ID */
    tableDataId?: number;
    /** 字段查询条件 */
    fieldQueryCondition?: Record<string, string>;
    /** 空数据 */
    existsEmptyData?: string;
    /** 错误数据 */
    existsErrorData?: string;
    /** 存在重复的数据 */
    existsRepeatData?: string;
    /** 校验状态 */
    verificationStatus?: string;
    /** 操作模式 */
    operationMode?: string;
    /** 生效状态 */
    importStatus?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

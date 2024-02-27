import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单导入相关/getImportResultByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProduceOrderImportSynchronizationOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderImport/getImportResultById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceOrderImportSynchronizationOutputDTO» */
export interface IJSONResultProduceOrderImportSynchronizationOutputDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceOrderImportSynchronizationOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceOrderImportSynchronizationOutputDTO */
export interface IProduceOrderImportSynchronizationOutputDTO {
    /** undefined */
    id?: string;
    /** undefined */
    importStatus?: EProduceOrderImportSynchronizationOutputDTO_importStatus;
    /** undefined */
    failureMessage?: string;
    /** undefined */
    totalCount?: number;
    /** undefined */
    importedCount?: number;
    /** undefined */
    existsSystemQuantity?: number;
    /** undefined */
    importSuccessQuantity?: number;
    /** undefined */
    importFailureQuantity?: number;
    /** undefined */
    failureProduceOrderList?: IProduceOrderImportFailureOutputDTO[];
    /** undefined */
    repeatProduceOrderList?: Record<string, any>[];
    /** undefined */
    savedProduceOrderIdList?: string[];
}
/** ProduceOrderImportFailureOutputDTO */
export interface IProduceOrderImportFailureOutputDTO {
    /** undefined */
    produceOrderCode?: string;
    /** undefined */
    failureMessage?: string;
}

export enum EProduceOrderImportSynchronizationOutputDTO_importStatus {
    NOT = "NOT",
    COMPLETE = "COMPLETE",
    IMPORTING = "IMPORTING",
    IMPORT_FAIL = "IMPORT_FAIL"
}

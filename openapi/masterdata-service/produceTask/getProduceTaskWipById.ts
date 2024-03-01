import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getProduceTaskWipByIdUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultIndicatesTheResponseDTOToTheProductionTaskWIPInformation>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskWipById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产任务WIP信息响应DTO» */
export interface IJSONResultIndicatesTheResponseDTOToTheProductionTaskWIPInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProductionTaskWIPInformationRespondsToTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务WIP信息响应DTO */
export interface ITheProductionTaskWIPInformationRespondsToTheDTO {
    /** 在制中WIP信息 */
    wipAfterLots?: IProductionTaskWIPBatchInformationVO[];
    /** 在制中WIP数 */
    wipAfterQuantity?: number;
    /** 在制前WIP信息 */
    wipBeforeLots?: IProductionTaskWIPBatchInformationVO[];
    /** 在制前WIP数 */
    wipBeforeQuantity?: number;
}
/** 生产任务WIP批次信息VO */
export interface IProductionTaskWIPBatchInformationVO {
    /** 批次id */
    lotOrderId?: string;
    /** 批次名称 */
    lotOrderName?: string;
    /** 批次号 */
    lotOrderNo?: string;
    /** 锁定数量 */
    storageLockCount?: number;
    /** 总数量 */
    storageTotalCount?: number;
    /** 可使用数量 */
    storageUseCount?: number;
}

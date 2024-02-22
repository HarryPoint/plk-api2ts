import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProduceTaskWipByIdUsingGET
export function fetchMethod(params: { taskId: string; enterpriseId: number }) {
    return get({
      url: "/masterdata-service/produceTask/getProduceTaskWipById",
      params,
    });
}
// JSONResult«生产任务WIP信息响应DTO»
export interface IJSONResultIndicatesTheResponseDTOToTheProductionTaskWIPInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProductionTaskWIPInformationRespondsToTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务WIP信息响应DTO
export interface ITheProductionTaskWIPInformationRespondsToTheDTO {
    // 在制前WIP数
    wipBeforeQuantity: number;
    // 在制前WIP信息
    wipBeforeLots: IProductionTaskWIPBatchInformationVO[];
    // 在制中WIP数
    wipAfterQuantity: number;
    // 在制中WIP信息
    wipAfterLots: IProductionTaskWIPBatchInformationVO[];
}
// 生产任务WIP批次信息VO
export interface IProductionTaskWIPBatchInformationVO {
    // 批次id
    lotOrderId: number;
    // 批次名称
    lotOrderName: string;
    // 批次号
    lotOrderNo: string;
    // 总数量
    storageTotalCount: number;
    // 锁定数量
    storageLockCount: number;
    // 可使用数量
    storageUseCount: number;
}

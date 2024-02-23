import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务相关/getMoveOutLotUsingGET
export default function fetchMethod(params: { taskId: string; enterpriseId: number }) {
    return get<IJSONResultListwipRespondsToDtoForIncomingAndOutgoingMaterials>({
      url: "/masterdata-service/produceTask/getMoveOutLot",
      params,
    });
}
// JSONResult«List«wip可进出料响应dto»»
export interface IJSONResultListwipRespondsToDtoForIncomingAndOutgoingMaterials {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IWipCanRespondToDto[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// wip可进出料响应dto
export interface IWipCanRespondToDto {
    // 批次id -- 有批次时有值
    lotOrderId: number;
    // 批次名称  -- 有批次时有值
    lotName: string;
    // 批次号  -- 有批次时有值
    lotNo: string;
    // 原始数量 -- 有批次时为批次原始数量，无批次时为任务计划量
    totalQuantity: number;
    // wip库存创建时间 - 进料批次的的首次来料时间
    wmRpCreateTime: string;
    // 可委外数量
    canEntrustQuantity: number;
    // 可操作数量
    canOptQuantity: number;
    // wip状态信息集
    wipQuantityStatusList: IWipQuantityStatusInformationResponseObject[];
}
// Wip数量状态信息响应对象
export interface IWipQuantityStatusInformationResponseObject {
    // wip状态记录id
    wipRpId: number;
    // 数量
    quantity: number;
    // wip数量状态
    quantityStatus: string;
    // wip数量状态描述
    quantityStatusDesc: string;
    // 是否可用
    canUse: string;
    // wip库存创建时间 - 进料批次的的首次来料时间
    wmRpCreateTime: string;
    // 可委外数量
    canEntrustQuantity: number;
    // 可操作数量
    canOptQuantity: number;
    // 是否锁定
    isLock: string;
}

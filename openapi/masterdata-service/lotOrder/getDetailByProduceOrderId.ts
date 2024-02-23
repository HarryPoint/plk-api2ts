import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/getDetailByProduceOrderIdUsingGET
export default function fetchMethod(params: { enterpriseId: number; produceOrderId: number }) {
    return get<IJSONResultListBatchOrderReturnsVO['data']>({
      url: "/masterdata-service/lotOrder/getDetailByProduceOrderId",
      params,
    });
}
// JSONResult«List«批次订单返回VO»»
export interface IJSONResultListBatchOrderReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchOrderIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次订单返回VO
export interface IBatchOrderIsReturnedToVO {
    // id
    id: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 来源批次号
    originalLotNo: string;
    // 对应生产订单id
    produceOrderId: string;
    // 对应生产订单号
    produceOrderCode: string;
    // 对应销售订单号
    salesOrderCode: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料规格
    materialSpec: string;
    // 对应物料单位
    materialUnit: string;
    // 总数量
    totalCount: number;
    // 当前生产数量
    currentCount: number;
    // 总报废数量
    scrapTotalCount: number;
    // 实际剩余数量
    actualTotalCount: number;
    // 拆出数量
    changeTotalCount: number;
    // 生产工艺路径id
    produceTechnologyRoutingId: number;
    // 生产工艺路径名称
    produceTechnologyRoutingName: string;
    // 生产工艺路径编号
    produceTechnologyRoutingCode: string;
    // 当前流水类型(界面上的当前生产状态)
    lastFlowType: string;
    // 当前流水类型描述
    lastFlowTypeDesc: string;
    // 当前对应工艺路径步骤id
    lastProduceRoutingStepId: number;
    // 当前对应工序id
    lastProcessId: number;
    // 当前对应工序名称
    lastProcessName: string;
    // 当前对应工序编号
    lastProcessCode: string;
    // 当前工艺步骤 - 用于展示工艺进度条
    lastRoutingStep: number;
    // 总工艺数 - 用于展示工艺进度条
    totalStepCount: number;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 来源集
    sourceList: IBatchOrderSourceReturnedToVO[];
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 批次订单二维码值
    lotOrderQrcode: string;
}
// 批次订单来源返回VO
export interface IBatchOrderSourceReturnedToVO {
    // 来源类型
    sourceType: string;
    // 来源类型描述
    sourceTypeDesc: string;
    // 来源批次单号
    sourceLotNo: string;
}

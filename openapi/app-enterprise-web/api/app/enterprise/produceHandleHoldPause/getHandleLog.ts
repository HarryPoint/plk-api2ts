import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产处理暂扣相关/getHandleLogUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProducesTheResponseObjectForTheSuspenseProcessingRecord>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandleHoldPause/getHandleLog",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产处理暂扣处理记录响应对象»» */
export interface IJSONResultListProducesTheResponseObjectForTheSuspenseProcessingRecord {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingWithholdProcessingRecordResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产处理暂扣处理记录响应对象 */
export interface IProductionProcessingWithholdProcessingRecordResponseObject {
    /** 生产处理id */
    id?: number;
    /** 创建时间 */
    createTime?: string;
    /** 明细 */
    detailList?: IProductionProcessingWithholdProcessingRecordDetailsResponseObject[];
}
/** 生产处理暂扣处理记录详情响应对象 */
export interface IProductionProcessingWithholdProcessingRecordDetailsResponseObject {
    /** 生产处理id */
    id?: number;
    /** 创建时间 */
    createTime?: string;
    /** 生产处理操作类型 */
    handleOp?: EProductionProcessingWithholdProcessingRecordDetailsResponseObject_handleOp;
    /** 返工生产后处理方式 */
    backProduceType?: EProductionProcessingWithholdProcessingRecordDetailsResponseObject_backProduceType;
    /** 返工工艺路径名称 */
    backProduceTechnologyRoutingStepName?: string;
    /** undefined */
    produceAbnormalName: string;
    /** 处理数量 */
    abnormalQuantity?: number;
    /** 处理意见 */
    handleRemark?: string;
}

export enum EProductionProcessingWithholdProcessingRecordDetailsResponseObject_handleOp {
    /** 上报反馈 */
    REPORT_ADD = "REPORT_ADD",
    /** 上报反馈 */
    REPORT_SURE = "REPORT_SURE",
    /** 上报反馈 */
    REPORT_IGNORE = "REPORT_IGNORE",
    /** 扣留 */
    HOLD_RELEASE = "HOLD_RELEASE",
    /** 扣留 */
    HOLD_BACK = "HOLD_BACK",
    /** 暂扣 */
    HOLD_PAUSE_ADD = "HOLD_PAUSE_ADD",
    /** 暂扣 */
    HOLD_PAUSE_RELEASE = "HOLD_PAUSE_RELEASE",
    /** 暂扣 */
    HOLD_PAUSE_BACK = "HOLD_PAUSE_BACK",
    /** 暂扣 */
    HOLD_PAUSE_SCRAP = "HOLD_PAUSE_SCRAP",
    /** 返工 */
    BACK_ADD = "BACK_ADD",
    /** 返工 */
    BACK_APPROVAL = "BACK_APPROVAL",
    /** 返工 */
    BACK_REFUSE = "BACK_REFUSE",
    /** 报废 */
    SCRAP_ADD = "SCRAP_ADD",
    /** 报废 */
    SCRAP_APPROVAL = "SCRAP_APPROVAL",
    /** 报废 */
    SCRAP_REFUSE = "SCRAP_REFUSE",
    /** 质检 */
    QUALITY_COMPLETE = "QUALITY_COMPLETE",
    /** 质检 */
    QUALITY_CANCEL = "QUALITY_CANCEL",
    /** 进站 */
    MOVE_IN = "MOVE_IN",
    /** 出站 */
    MOVE_OUT = "MOVE_OUT",
    /** 委外添加 */
    ENTRUST_ADD = "ENTRUST_ADD"
}

export enum EProductionProcessingWithholdProcessingRecordDetailsResponseObject_backProduceType {
    /** 返回原工序 */
    RETURN = "RETURN",
    /** 顺序生产 */
    ORDER = "ORDER"
}

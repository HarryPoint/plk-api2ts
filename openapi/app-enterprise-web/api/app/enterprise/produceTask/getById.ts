import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产任务相关/getByIdUsingGET_13
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionTaskDetailsReturnToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTask/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产任务详情返回VO» */
export interface IJSONResultProductionTaskDetailsReturnToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskDetailsReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务详情返回VO */
export interface IProductionTaskDetailsReturnToVO {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务下发方式 */
    issueType?: string;
    /** 任务下发方式描述 */
    issueTypeDesc?: string;
    /** 任务类型 */
    type?: string;
    /** 任务类型描述 */
    typeDesc?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 对应工艺路径步骤 */
    routingStep?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应班次id */
    classShiftId?: number;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 补单来源生产任务id */
    supplementSourceProduceTaskId?: number;
    /** 计划生产数量 - 任务进度分母 */
    planProduceQuantity?: number;
    /** 当前完成数量 - 任务进度分子(合格数量) */
    currentCompleteQuantity?: number;
    /** 任务进度分子(补单数量) */
    supplementCompleteQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 可质检数量 */
    canQualityQuantity?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 实际结束时间 */
    actualEndTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 关闭人 */
    closeUserId?: number;
    /** 关闭人姓名 */
    closeUsername?: string;
    /** 关闭时间 */
    closeTime?: string;
    /** 关闭原因 */
    closeRemark?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 可操作项列表 */
    canOpItemList?: string[];
    /** 可操作项列表拼接 */
    canOpItemListStr?: string;
    /** 生产任务记录 */
    produceHandles?: IProductionProcessingBasicInformationRespondsToDTO[];
}
/** 生产处理基础信息响应DTO */
export interface IProductionProcessingBasicInformationRespondsToDTO {
    /** id */
    id?: number;
    /** 所属生产任务id */
    produceTaskId?: number;
    /** 任务号 */
    produceTaskNo?: string;
    /** 业务类型 */
    businessType?: string;
    /** 异常分类 */
    type?: string;
    /** 异常分类描述 */
    typeDesc?: string;
    /** 所属进出站记录id */
    moveInOutRecordId?: number;
    /** 生产异常类型名称 */
    produceAbnormalName?: string;
    /** 生产异常类型编号 */
    produceAbnormalCode?: string;
    /** 报废数量 */
    abnormalQuantity?: number;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 备注 */
    remark?: string;
    /** 对应生产委外id */
    produceEntrustId?: number;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 图片上传key集合 */
    imageKeys?: string;
    /** 图片Url集合 */
    imageUrls?: string[];
    /** 工艺卡录入信息 - 仅已进出站有工艺卡信息时有值 */
    inputList?: IKeyParametersInAndOutOfTheStationDetailResponseDTO[];
    /** 异常描述 */
    desc?: string;
    /** 处理人id */
    handleUserId?: number;
    /** 处理人 */
    handleUsername?: string;
    /** 处理时间 */
    handleTime?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序 */
    processName?: string;
    /** undefined */
    materialId?: number;
}
/** 进出站关键参数明细响应DTO */
export interface IKeyParametersInAndOutOfTheStationDetailResponseDTO {
    /** 明细id */
    id?: number;
    /** 明细名称/标题 */
    name: string;
    /** 录入类型 */
    inputType?: string;
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 图片Url集合 - 明细录入类型是图片时，有值 */
    imageUrls?: string[];
}

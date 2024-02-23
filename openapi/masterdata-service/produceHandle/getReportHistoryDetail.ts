import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产事件管理/getReportHistoryDetailUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultProductionProcessingBasicInformationDetailsAreReturnedToVO>({
      url: "/masterdata-service/produceHandle/getReportHistoryDetail",
      params,
    });
}
// JSONResult«生产处理基础信息详情返回VO»
export interface IJSONResultProductionProcessingBasicInformationDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionProcessingBasicInformationDetailsReturnToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理基础信息详情返回VO
export interface IProductionProcessingBasicInformationDetailsReturnToVO {
    // id
    id: number;
    // 所属生产任务id
    produceTaskId: number;
    // 任务号
    produceTaskNo: string;
    // 业务类型
    businessType: string;
    // 异常分类
    type: string;
    // 异常分类描述
    typeDesc: string;
    // 所属进出站记录id
    moveInOutRecordId: number;
    // 生产异常类型名称
    produceAbnormalName: string;
    // 生产异常类型编号
    produceAbnormalCode: string;
    // 报废数量
    abnormalQuantity: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 备注
    remark: string;
    // 对应生产委外id
    produceEntrustId: number;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 创建人id
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建时间
    createTime: string;
    // 图片上传key集合
    imageKeys: string;
    // 图片Url集合
    imageUrls: string[];
    // 工艺卡录入信息 - 仅已进出站有工艺卡信息时有值
    inputList: IProcessCardDetailsReturnVOWithInformationFilledIn[];
    // 异常描述
    desc: string;
    // 处理人id
    handleUserId: number;
    // 处理人
    handleUsername: string;
    // 处理时间
    handleTime: string;
    // 销售订单编码
    salesOrderCode: string;
    // 对应工序id
    processId: number;
    // 对应工序
    processName: string;
    // 对应工艺路径id
    routingId: number;
    // 所属生产任务工艺路径步骤
    routingStep: number;
    // 标签集合
    tags: string[];
    // 对应生产订单id
    produceOrderId: number;
    // 对应生产订单号
    produceOrderCode: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 已处理数量
    handleQuantity: number;
    // 待处理数量
    waitQuantity: number;
    // 返工数量
    backQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 放行数量
    releaseQuantity: number;
    // 返工工艺路径步骤id
    backRoutingStepId: number;
    // 返工工艺路径步骤
    backRoutingStep: number;
    // 返工工序id
    backProcessId: number;
    // 返工工序名称
    backProcessName: string;
    // 返工工序编号
    backProcessCode: string;
    // 返工生产类型
    backProduceType: string;
    // 返工生产类型描述
    backProduceTypeDesc: string;
    // 处理意见
    handleRemark: string;
}
// 工艺卡明细返回VO(含填写的信息)
export interface IProcessCardDetailsReturnVOWithInformationFilledIn {
    // 明细id
    id: number;
    // 明细类型
    type: string;
    // 明细名称/标题
    name: string;
    // 明细编号
    code: string;
    // 描述内容/备注
    remark: string;
    // 文件名称
    fileName: string;
    // 文件key
    fileKey: string;
    // 文件完整url
    fileUrl: string;
    // 录入类型
    inputType: string;
    // 文本类型
    textType: string;
    // 文本比较值集
    textCompareValueList: string[];
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 图片最大上传量
    imageTotalCount: number;
    // 选项集
    selectorList: string[];
    // 录入值 - 明细录入类型不是图片时，有值
    inputValue: string;
    // 图片上传key集合 - 明细录入类型是图片时，有值
    imageKeys: string[];
    // 图片Url集合 - 明细录入类型是图片时，有值
    imageUrls: string[];
}

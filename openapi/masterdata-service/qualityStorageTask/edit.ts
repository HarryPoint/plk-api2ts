import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质检管理/editUsingPOST_19
export default function fetchMethod(data: IEditTheInspectionTaskDTO, params: { enterpriseId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/qualityStorageTask/edit",
      data,
      params,
    });
}
// 编辑质检任务 DTO
export interface IEditTheInspectionTaskDTO {
    // id，如果不传就是新增
    id: number;
    // 任务号
    taskNo: string;
    // 质检物料id
    materialId: number;
    // 采购收货单物料明细id
    purchaseWorkOrderDetailId: number;
    // 质检方案id
    qualityInspectionPlanId: number;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 是否应用编码规则
    isCodeRule: string;
    // 物料位置id
    qualityWarehouseId: number;
    // 检验位置id
    checkPositionId: number;
    // 处理人id
    handleUserId: number;
    // 计划开始时间
    planBeginTime: string;
    // 采购收货单id
    purchaseWorkOrderId: number;
    // 质检任务类型
    taskType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

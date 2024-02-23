import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getRoutingStepsByRoutingIdsUsingPOST
export default function fetchMethod(data: number[], params: { enterpriseId: number }) {
    return http<IJSONResultListBaseVO1>({
        url: "/masterdata-service/routing/getRoutingStepsByRoutingIds",
        method: "post",
        data,
        params,
    });
}
// JSONResult«List«基础VO»»_1
export interface IJSONResultListBaseVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBaseVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 基础VO_1
export interface IBaseVO1 {
    // id
    id: number;
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建部门id
    createDeptId: number;
    // 创建时间
    createTime: string;
    // 修改账户id
    updateUserId: number;
    // 修改部门id
    updateDeptId: number;
    // 更新时间
    updateTime: string;
    // 所属工艺路径id
    routingId: number;
    // 所属工艺路径步骤
    routingStep: number;
    // 所属工序id
    processId: number;
    // 所属主物料id
    materialId: number;
    // 所属主物料bomid
    materialBomId: number;
    // 所属进料工艺卡id
    processSheetBeforeId: number;
    // 所属出料工艺卡id
    processSheetAfterId: number;
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 进出站方式
    inOutType: string;
    // 是否允许直接出站
    allowDirectExit: string;
    // BOM物料消耗确认类型
    bomConsumeSureType: string;
    // 合格产出工费单价
    producePrice: number;
    // 返工产出工费单价
    backProducePrice: number;
    // 产能-生产时间
    capacityProduceTime: number;
    // 产能-时间类型
    capacityTimeType: string;
    // 产能-生产数量
    capacityProduceQuantity: number;
    // 准备工费（元）
    readyPrice: number;
}

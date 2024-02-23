import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/公共相关/getFlowPathTaskShiftSelectorUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListProcessShiftReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getFlowPathTaskShiftSelector",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«List«流程班次返回VO»»
export interface IJSONResultListProcessShiftReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessShiftBackToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程班次返回VO
export interface IProcessShiftBackToVO {
    // id
    id: number;
    // 班次名称
    name: string;
    // 班次编号
    code: string;
    // 开始时间
    beginTime: string;
    // 班次结束时间类型
    endTimeType: string;
    // 结束时间
    endTime: string;
    // 状态
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 方案名称
    planName: string;
    // 班次配置的人员信息
    users: IProcessNodeExecutorVO[];
}
// 流程节点执行人VO
export interface IProcessNodeExecutorVO {
    // id
    id: number;
    // 名称
    name: string;
    // 执行人id
    executorId: number;
    // 执行人类型
    executorType: string;
    // 执行人系统控件类型
    executorSysType: string;
    // 组织字段序列 - 即动态控件
    organizationFieldSerialNo: string;
    // flowPathId
    flowPathId: number;
    // 节点ID
    flowPathNodeId: number;
}

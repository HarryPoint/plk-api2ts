import { get } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/任务班次相关/getDynamicExecutorSelectorUsingGET
export default function fetchMethod(params: { enterpriseId: number }) {
    return get<IJSONResultListProcessNodeDynamicExecutorReturnsVO['data']>({
      url: "/flow-service/flowPathShift/getDynamicExecutorSelector",
      params,
    });
}
// JSONResult«List«流程节点动态执行人返回VO»»
export interface IJSONResultListProcessNodeDynamicExecutorReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProcessNodeDynamicExecutorReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程节点动态执行人返回VO
export interface ITheProcessNodeDynamicExecutorReturnsVO {
    // 动态执行人类型
    dynamicExecutorType: string;
    // id
    id: number;
    // 动态执行人类型描述
    dynamicExecutorTypeDesc: string;
    // 名称
    name: string;
    // 编号
    code: string;
    // 系统控件类型
    executorSysType: string;
    // 配置类型
    executorType: string;
}

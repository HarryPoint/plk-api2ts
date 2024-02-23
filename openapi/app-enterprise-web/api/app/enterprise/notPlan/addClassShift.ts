import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/未排产订单相关/addClassShiftUsingPOST
export default function fetchMethod(data: IShiftEditorDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/notPlan/addClassShift",
        method: "post",
        data,
    });
}
// 班次编辑DTO
export interface IShiftEditorDTO {
    // id
    id: number;
    // 班次名称
    name: string;
    // 班次编号
    code: string;
    // 开始时间 HH:mm
    beginTime: string;
    // 班次结束时间类型
    endTimeType: string;
    // 结束时间 HH:mm
    endTime: string;
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
